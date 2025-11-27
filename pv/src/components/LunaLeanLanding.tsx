import React from "react";
import { motion } from "motion/react";
import {
  Check,
  Star,
  ShieldCheck,
  ShoppingBag,
  Zap,
  ChevronDown,
  Flame,
  Clock,
  Gift,
  AlertTriangle,
  ArrowDown,
  Sparkles,
  Fingerprint,
  Globe
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "./LanguageContext";

// --- Images ---
const IMAGES = {
  hero1: "https://images.unsplash.com/photo-1755198979250-809bb8baf94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNob3dpbmclMjBmbGF0JTIwYmVsbHklMjBzdG9tYWNofGVufDF8fHx8MTc2NDEyMjYxOXww&ixlib=rb-4.1.0&q=80&w=1080",
  hero2: "https://images.unsplash.com/photo-1653801921063-1ddd23a411a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZpdCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MTA4MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  hero3: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000",
  
  step1: "https://images.unsplash.com/photo-1700150618387-3f46b6d2cf8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmcnVpdHMlMjBnbGFzc3xlbnwxfHx8fDE3NjQxMDgwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  step2: "https://images.unsplash.com/photo-1472982072373-d7bcc196aabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtpbmclMjBncmVlbiUyMGp1aWNlJTIwYmxlbmRlciUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc2NDEyMjYxOXww&ixlib=rb-4.1.0&q=80&w=1080",
  step3: "https://images.unsplash.com/photo-1543648973-1eb94629e7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGp1aWNlJTIwc21vb3RoaWUlMjBnbGFzc3xlbnwxfHx8fDE3NjQxMDgwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  step4: "https://images.unsplash.com/photo-1759478642913-b6acdba16a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc21vb3RoaWUlMjBpbmdyZWRpZW50cyUyMHRhYmxlfGVufDF8fHx8MTc2NDEyMjYxOXww&ixlib=rb-4.1.0&q=80&w=1080",

  giftCard: "https://images.unsplash.com/photo-1591270551371-3401a1a9382f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBnaWZ0JTIwY2FyZHxlbnwxfHx8fDE3NjQwODg0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

// --- Components ---

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div className="w-full">
        {/* Language Switcher */}
        <div className="bg-white border-b border-gray-100 px-4 py-1 flex justify-end">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <Globe className="w-3 h-3" />
                <button 
                    onClick={() => setLanguage('pt')} 
                    className={`hover:text-green-600 ${language === 'pt' ? 'font-bold text-green-700' : ''}`}>PT</button>
                <span>|</span>
                <button 
                    onClick={() => setLanguage('en')} 
                    className={`hover:text-green-600 ${language === 'en' ? 'font-bold text-green-700' : ''}`}>EN</button>
                <span>|</span>
                <button 
                    onClick={() => setLanguage('es')} 
                    className={`hover:text-green-600 ${language === 'es' ? 'font-bold text-green-700' : ''}`}>ES</button>
            </div>
        </div>
        <div className="bg-green-900 text-white text-center py-2 text-sm font-bold tracking-wide">
            {t.header}
        </div>
    </div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white pt-8 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
        >
          {t.hero.headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 italic"
        >
          {t.hero.subheadline} <span className="font-bold text-red-600">{t.hero.subheadlineHighlight}</span> {t.hero.subheadlineEnd}
        </motion.p>

        {/* Images Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8">
            {[
              { img: IMAGES.hero1, label: t.hero.img1 },
              { img: IMAGES.hero2, label: t.hero.img2 },
              { img: IMAGES.hero3, label: t.hero.img3 }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg border-2 border-white">
                  <img src={item.img} alt="Resultado" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm py-2 text-[10px] md:text-xs font-bold text-green-800 text-center uppercase tracking-tight">
                  {item.label}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

const Bullets = () => {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-center mb-8">
           <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider text-center">{t.bullets.title}</h2>
        </div>
        
        <div className="space-y-6">
          {/* Bullet 1 */}
          <motion.div 
             whileHover={{ scale: 1.02 }}
             className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-green-500 flex items-start gap-4"
          >
             <div className="text-4xl shrink-0">💩</div>
             <div>
               <h3 className="text-lg font-bold text-green-900">{t.bullets.item1Title}</h3>
               <p className="text-gray-600 text-sm mt-1">{t.bullets.item1Desc}</p>
             </div>
          </motion.div>

          {/* Bullet 2 */}
           <motion.div 
             whileHover={{ scale: 1.02 }}
             className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-orange-400 flex items-start gap-4"
          >
             <div className="text-4xl shrink-0">🌅</div>
             <div>
               <h3 className="text-lg font-bold text-gray-900">{t.bullets.item2Title}</h3>
               <p className="text-gray-600 text-sm mt-1">{t.bullets.item2Desc}</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const AlertBar = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-red-600 py-4 px-4 animate-pulse">
        <div className="container mx-auto max-w-4xl flex items-center justify-center text-center gap-2 text-white font-bold text-sm md:text-lg">
        <AlertTriangle className="w-6 h-6 shrink-0 text-yellow-300" />
        <p>{t.alert}</p>
        </div>
    </div>
  )
}

const Testimonials = () => {
   const { t } = useLanguage();
   const reviews = [
    {
      name: t.testimonials.name1,
      stars: 5,
      text: t.testimonials.rev1,
      img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: t.testimonials.name2,
      stars: 5,
      text: t.testimonials.rev2,
      img: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
         <h2 className="text-2xl font-bold text-center mb-8">{t.testimonials.title}</h2>
         <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((rev, i) => (
              <Card key={i} className="bg-white text-gray-900 border-none shadow-xl">
                <CardContent className="p-6 flex gap-4 items-start">
                   <img src={rev.img} alt={rev.name} className="w-16 h-16 rounded-full object-cover border-2 border-green-500" />
                   <div>
                      <h4 className="font-bold text-lg">{rev.name}</h4>
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-gray-600 italic text-sm leading-relaxed">{rev.text}</p>
                   </div>
                </CardContent>
              </Card>
            ))}
         </div>
      </div>
    </section>
  )
}

const HowItWorks = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase">{t.howItWorks.title}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
           {[
             { img: IMAGES.step1, text: t.howItWorks.step1 },
             { img: IMAGES.step2, text: t.howItWorks.step2 },
             { img: IMAGES.step3, text: t.howItWorks.step3 },
             { img: IMAGES.step4, text: t.howItWorks.step4 }
           ].map((step, i) => (
             <div key={i} className="space-y-2 group">
               <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-lg relative">
                  <img src={step.img} alt={step.text} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 pt-8">
                     <p className="text-white font-bold text-sm">{step.text}</p>
                  </div>
               </div>
             </div>
           ))}
        </div>

        <div className="relative bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-200 shadow-xl mx-auto max-w-3xl overflow-hidden">
           {/* Decorative glow */}
           <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/40 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
             <div className="relative">
                <div className="bg-white p-4 rounded-full shadow-lg shadow-green-100 shrink-0 relative z-10">
                  <Fingerprint className="w-10 h-10 text-green-600" />
                </div>
                <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-20 animate-pulse"></div>
             </div>
             
             <div>
               <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center md:justify-start gap-2">
                 <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                 {t.howItWorks.aiCardTitle}
               </h3>
               <p 
                 className="text-gray-600 font-medium leading-relaxed text-base"
                 dangerouslySetInnerHTML={{ __html: t.howItWorks.aiCardDesc }}
               />
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

const Bonus = () => {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
        <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-bold text-sm tracking-wider mb-2">
          {t.bonus.badge}
        </div>
        <h2 
            className="text-2xl md:text-4xl font-black text-gray-900"
            dangerouslySetInnerHTML={{ __html: t.bonus.title }}
        />
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative mx-auto max-w-sm mt-8 shadow-2xl rounded-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all"
        >
           <img src={IMAGES.giftCard} alt="Amazon Gift Card" className="w-full" />
           <div className="absolute bottom-4 left-0 w-full text-center">
              <span className="bg-white/90 text-gray-900 font-bold px-4 py-1 rounded-full text-xs shadow-sm">
                 {t.bonus.cardBadge}
              </span>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

const PricingCard = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
         <Card className="max-w-md mx-auto overflow-hidden border-2 border-green-500 shadow-[0_10px_40px_rgba(34,197,94,0.2)]">
            <div className="bg-green-100 py-3 text-center font-bold text-green-800 text-sm uppercase tracking-wide">
              {t.pricing.header}
            </div>
            <CardContent className="p-8 text-center space-y-6">
               <h3 className="text-2xl font-bold text-gray-900">
                 {t.pricing.title}
               </h3>
               
               <div className="space-y-2">
                 <p className="text-gray-400 text-lg line-through">{t.pricing.from}</p>
                 <div className="text-5xl font-black text-green-600 tracking-tight">
                   {t.pricing.price}
                 </div>
                 <p className="text-green-600 font-semibold text-sm">{t.pricing.oneTime}</p>
               </div>

               <Button className="w-full py-8 text-xl font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-200 rounded-xl group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Flame className="fill-yellow-400 text-yellow-400 w-6 h-6 animate-pulse" />
                    {t.pricing.cta}
                  </span>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               </Button>

               <div className="text-xs text-gray-500 flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                 <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> {t.pricing.secure}</span>
                 <span className="flex items-center gap-1"><Check className="w-4 h-4" /> {t.pricing.access}</span>
               </div>
            </CardContent>
         </Card>
      </div>
    </section>
  )
}

const FAQ = () => {
  const { t } = useLanguage();
   const questions = [
        { q: t.faq.q1, a: t.faq.a1 },
        { q: t.faq.q2, a: t.faq.a2 },
        { q: t.faq.q3, a: t.faq.a3 },
        { q: t.faq.q4, a: t.faq.a4 },
    ]

  return (
    <section className="py-16 bg-gray-50">
       <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">{t.faq.title}</h2>
          <Accordion type="single" collapsible className="w-full space-y-3">
          {questions.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-800 text-base hover:no-underline py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
       </div>
    </section>
  )
}

const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">L</div>
            <span className="text-xl font-bold text-white">LunaLean</span>
        </div>
        <p className="text-xs max-w-xl mx-auto leading-relaxed opacity-60">
            {t.footer.disclaimer}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium cursor-pointer">
            <span onClick={() => onNavigate("terms")} className="hover:text-white transition-colors">{t.footer.terms}</span>
            <span onClick={() => onNavigate("privacy")} className="hover:text-white transition-colors">{t.footer.privacy}</span>
            <span onClick={() => onNavigate("refunds")} className="hover:text-white transition-colors">{t.footer.refunds}</span>
            <a href="mailto:info@lunalean.com" className="hover:text-white transition-colors">{t.footer.contact}</a>
        </div>
        <p className="text-[10px] opacity-40">{t.footer.rights}</p>
        </div>
    </footer>
  );
}

export function LunaLeanLanding({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Bullets />
        <AlertBar />
        <Testimonials />
        <HowItWorks />
        <Bonus />
        <PricingCard />
        <FAQ />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
