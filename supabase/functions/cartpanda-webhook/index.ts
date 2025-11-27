import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2';

// Initialize Supabase client with service role
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Accepted webhook events
const ACCEPTED_EVENTS = ['order.paid', 'payment.approved'];

Deno.serve(async (req: Request) => {
    // Only accept POST requests
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // 🔒 SECURITY: Validate custom webhook token
    const webhookToken = req.headers.get('X-Webhook-Token');
    const expectedToken = Deno.env.get('WEBHOOK_SECRET_TOKEN');

    if (expectedToken && webhookToken !== expectedToken) {
        console.error('❌ Invalid webhook token');
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        // Parse webhook payload from Cartpanda
        const payload = await req.json();

        console.log('✅ Received Cartpanda webhook');

        // Extract data from Cartpanda webhook structure
        const event = payload.event;
        const order = payload.order;

        // Validate event type
        if (!event || !ACCEPTED_EVENTS.includes(event)) {
            console.log('⏭️ Event not accepted:', event);
            return new Response(JSON.stringify({
                message: 'Event not processed',
                event: event,
                accepted_events: ACCEPTED_EVENTS
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        console.log('🎯 Processing event:', event);

        // Extract customer and payment from order object
        const customer = order?.customer;
        const payment = order?.payment;

        // Validate required fields
        if (!order || !customer || !payment) {
            console.error('❌ Missing required fields in payload');
            return new Response(JSON.stringify({
                error: 'Missing required fields',
                received: {
                    hasOrder: !!order,
                    hasCustomer: !!customer,
                    hasPayment: !!payment
                }
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const email = customer.email || order.email;
        const paymentStatusId = payment.status_id;
        const orderId = order.id;
        const amount = payment.amount;
        const currency = payment.currency || 'BRL';
        const transactionId = payment.gateway_payment_id || payment.id;

        console.log('📧 Email:', email);
        console.log('💳 Payment Status ID:', paymentStatusId);
        console.log('🆔 Order ID:', orderId);
        console.log('💰 Amount:', amount, currency);

        // Validate email
        if (!email) {
            console.error('❌ No email found in payload');
            return new Response(JSON.stringify({ error: 'Email not found' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Check payment status
        // Cartpanda status_id: 3 = paid/approved
        if (paymentStatusId !== 3) {
            console.log('⏸️ Payment not completed, status_id:', paymentStatusId);
            return new Response(JSON.stringify({
                message: 'Payment not completed',
                status_id: paymentStatusId
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Check if payment already exists
        const { data: existingPayment } = await supabase
            .from('payments')
            .select('id')
            .eq('external_id', transactionId.toString())
            .single();

        if (existingPayment) {
            console.log('⚠️ Payment already exists, skipping:', transactionId);
            return new Response(JSON.stringify({
                message: 'Payment already processed',
                payment_id: existingPayment.id
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Insert payment record WITHOUT user_id (will be linked when user signs up)
        console.log('💾 Inserting payment record for email:', email);
        const { data: paymentRecord, error: paymentError } = await supabase
            .from('payments')
            .insert({
                email: email.toLowerCase(), // Store lowercase for matching
                order_id: orderId.toString(),
                amount: amount,
                currency: currency,
                status: 'completed',
                payment_gateway: payment.gateway || 'cartpanda',
                external_id: transactionId.toString()
            })
            .select()
            .single();

        if (paymentError) {
            console.error('❌ Error inserting payment:', paymentError);
            throw paymentError;
        }

        console.log('✅ Payment recorded successfully:', paymentRecord.id);
        console.log('📝 Payment saved for email:', email);
        console.log('👉 User can now signup with this email to get access');

        return new Response(JSON.stringify({
            success: true,
            payment_id: paymentRecord.id,
            email: email,
            event: event,
            message: 'Payment recorded. User can now signup to access content.'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('❌ Webhook processing error:', error);
        return new Response(JSON.stringify({
            error: 'Internal server error',
            details: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
});
