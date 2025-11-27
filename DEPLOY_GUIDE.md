# 🚀 Guia de Deploy - LunaLean

## Estrutura do Projeto

Este projeto usa **1 único repositório** com **2 aplicações separadas**:

- **`pv/`** - Landing page (React + Vite) → `lunalean.com`
- **`lunalean10/`** - Aplicação principal (Vanilla JS + Vite) → `app.lunalean.com`

---

## Passo 1: Configurar DNS na Hostinger

### Acessar Painel DNS

1. Acesse [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Vá em **Domínios** → **lunalean.com** → **DNS/Nameservers**

### Adicionar Registros DNS

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 3600 |
| CNAME | www | `cname.vercel-dns.com` | 3600 |
| CNAME | app | `cname.vercel-dns.com` | 3600 |

**Importante:** Mantenha os registros MX existentes para o email profissional funcionar.

---

## Passo 2: Deploy na Vercel

### 2.1 Criar Projeto

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **Add New** → **Project**
3. Selecione **Import Git Repository**
4. Cole a URL: `https://github.com/usdigital702/lunalean10_final.git`
5. Clique em **Import**

### 2.2 Configurar Projeto

**Project Name:** `lunalean`

**Framework Preset:** `Other` (temos configuração customizada)

**Root Directory:** `.` (raiz do projeto)

**Build Command:**
```bash
cd pv && npm install && npm run build && cd ../lunalean10 && npm install && npm run build
```

**Output Directory:** Deixe vazio (usamos `vercel.json`)

**Install Command:**
```bash
npm install
```

### 2.3 Adicionar Domínios

Após o deploy inicial:

1. Vá em **Settings** → **Domains**
2. Adicione os domínios:
   - `lunalean.com` (marcar como **Primary**)
   - `www.lunalean.com` (redirecionar para lunalean.com)
   - `app.lunalean.com`

3. A Vercel vai verificar automaticamente os registros DNS
4. Aguarde o SSL ser provisionado (automático)

---

## Passo 3: Configurar Cartpanda

### Atualizar URLs de Redirecionamento

1. Acesse o painel do Cartpanda
2. Vá nas configurações do produto/checkout
3. Atualize:

**URL de Sucesso (após pagamento):**
```
https://app.lunalean.com/signup?payment=success
```

**URL de Cancelamento:**
```
https://lunalean.com?payment=cancelled
```

**Webhook URL (manter):**
```
https://bwpljuggevmtbighkrzc.supabase.co/functions/v1/cartpanda-webhook
```

---

## Passo 4: Configurar Email Profissional

### Criar Conta de Email na Hostinger

1. No painel Hostinger, vá em **Emails**
2. Clique em **Criar Conta de Email**
3. Crie: `contato@lunalean.com` (ou outro)
4. Configure senha forte
5. Acesse via webmail ou configure em cliente de email

---

## Como Funciona o Roteamento

O arquivo `vercel.json` na raiz do projeto faz o roteamento automático:

```
lunalean.com → pv/ (Landing Page)
www.lunalean.com → pv/ (Landing Page)
app.lunalean.com → lunalean10/ (Aplicação)
```

---

## Fluxo do Usuário

```
1. Usuário acessa lunalean.com (landing page)
2. Clica em "QUERO COMEÇAR"
3. Vai para checkout Cartpanda
4. Paga R$ 17
5. Cartpanda redireciona para app.lunalean.com/signup
6. Usuário cria conta
7. Faz onboarding
8. Acessa dashboard em app.lunalean.com
```

---

## Verificação

### Testar DNS (aguardar propagação 1-48h)

```bash
nslookup lunalean.com
nslookup app.lunalean.com
nslookup www.lunalean.com
```

### Checklist Final

- [ ] `lunalean.com` acessível (landing page)
- [ ] `www.lunalean.com` redireciona para `lunalean.com`
- [ ] `app.lunalean.com` acessível (login/signup)
- [ ] SSL ativo (cadeado verde) em todos os domínios
- [ ] Checkout Cartpanda redirecionando corretamente
- [ ] Email profissional funcionando
- [ ] Fluxo completo testado

---

## Comandos Úteis

### Build Local (Testar antes do deploy)

```bash
# Landing page
cd pv
npm install
npm run build

# Aplicação
cd ../lunalean10
npm install
npm run build
```

### Git

```bash
# Ver status
git status

# Adicionar arquivos
git add .

# Commit
git commit -m "Configure domain routing for lunalean.com and app.lunalean.com"

# Push
git push origin main
```

---

## Suporte

- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Hostinger:** Chat ao vivo no painel
- **Cartpanda:** Suporte via painel
- **Supabase:** [supabase.com/dashboard](https://supabase.com/dashboard)

---

## Estrutura de Arquivos Importantes

```
lunalean10/
├── vercel.json              # Configuração de roteamento
├── pv/                      # Landing page
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
├── lunalean10/              # Aplicação
│   ├── package.json
│   ├── js/
│   │   └── config.js        # URLs de produção
│   └── *.html
└── supabase/
    └── functions/
```
