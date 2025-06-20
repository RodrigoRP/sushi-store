# Sushi Store - Sistema de Reservas PWA

Sistema de reservas antecipadas para loja de sushi, desenvolvido como Progressive Web App (PWA).

## Funcionalidades

### Para Clientes
-  Visualizar card�pio com fotos e pre�os
-  Ver promo��es e banners do dia
-  Fazer reservas sem necessidade de login
-  Interface responsiva para mobile
-  Funciona offline (PWA)

### Para Administradores
-  Sistema de login seguro
- � Gerenciar produtos (cadastrar, editar, remover)
- � Configurar datas dispon�veis para pedidos
- � Definir limites de reservas
- � Gerenciar banners promocionais
- � Acompanhar reservas por data

## Stack Tecnol�gica

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estiliza��o**: Tailwind CSS
- **Banco de Dados**: SQLite + Prisma ORM
- **Autentica��o**: NextAuth.js
- **PWA**: next-pwa
- **�cones**: Lucide React

## Primeiros Passos

### Pr�-requisitos
- Node.js 18+ 
- npm ou yarn

### Instala��o

1. Instale as depend�ncias:
```bash
npm install
```

2. Configure o banco de dados:
```bash
npx prisma generate
npx prisma db push
```

3. Configure as vari�veis de ambiente:
```bash
cp .env.example .env.local
```

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

5. Acesse:
   - **Site principal**: http://localhost:3000
   - **�rea administrativa**: http://localhost:3000/admin/login
   - **Credenciais padr�o**: admin@sushistore.com / admin123

## Scripts Dispon�veis

```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Gera build de produ��o
npm run start        # Executa build de produ��o
npm run lint         # Executa linter
npm run db:push      # Aplica schema no banco
npm run db:generate  # Gera cliente Prisma
npm run db:studio    # Abre interface visual do banco
```

## Estrutura do Projeto

```
sushi-store/
   app/                 # App Router (Next.js 14)
      admin/          # �rea administrativa
      api/            # API Routes
      globals.css     # Estilos globais
      layout.tsx      # Layout principal
      page.tsx        # P�gina inicial
   components/         # Componentes React
      ui/            # Componentes de interface
   lib/               # Utilit�rios e configura��es
   prisma/            # Schema do banco de dados
   public/            # Arquivos est�ticos
   types/             # Defini��es TypeScript
```

## Pr�ximos Passos

1. **Implementar funcionalidades admin**:
   - CRUD de produtos
   - Gerenciamento de datas
   - Sistema de reservas

2. **Melhorar UX do cliente**:
   - Carrinho de compras
   - Formul�rio de reserva
   - Notifica��es

3. **Deploy**:
   - Configurar banco de produ��o
   - Deploy em Vercel/Netlify
   - Configurar dom�nio

## Contribui��o

Este � um projeto inicial. Para adicionar funcionalidades:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Fa�a commit das mudan�as
4. Abra um Pull Request

## Licen�a

Projeto privado para uso comercial.