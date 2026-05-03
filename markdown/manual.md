# Manual do Projeto Meu Carmo App

## Visão Geral

O Meu Carmo App é uma aplicação web desenvolvida com Next.js, TypeScript e Prisma, destinada a gerenciar solicitações de atividades e autenticação de usuários. A aplicação utiliza PostgreSQL como banco de dados e oferece uma interface responsiva com suporte a temas claro e escuro.

## Funcionalidades Principais

### 1. Autenticação de Usuários

- **Cadastro**: Permite que novos usuários se registrem fornecendo nome, email e senha.
- **Login**: Autenticação segura com validação de credenciais.
- **Logout**: Encerramento seguro da sessão.
- **Sessões**: Gerenciamento de sessões com JWT e cookies para manter o estado de login.
- **Proteção de Rotas**: Páginas protegidas que requerem autenticação para acesso.

### 2. Página Inicial (Home)

- Interface principal após o login.
- Acesso rápido aos módulos de surveys disponíveis.
- Atualmente, oferece acesso ao survey de "Solicitação de Atividade" para ELO.

### 3. Surveys

- **Survey ELO**: Formulário interativo para solicitação de atividades, incluindo campos para:
  - Informações básicas da atividade.
  - Detalhes de inscrições (valor da taxa, data limite, itens cobertos).
  - Informações sobre transporte, alimentação, etc.
  - Exportação para PDF ao finalizar o survey.
- Interface baseada na biblioteca Survey.js para formulários dinâmicos e responsivos.

### 4. Perfil do Usuário

- Visualização dos dados pessoais do usuário logado (nome e email).
- Página protegida, acessível apenas para usuários autenticados.

### 5. Navegação e Interface

- **Header**: Barra superior com navegação principal.
- **Nav Lateral**: Menu lateral para acesso rápido às seções.
- **Switch de Tema**: Alternância entre temas claro e escuro.
- **Layouts**: Layouts diferenciados para áreas públicas e protegidas.

## Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS.
- **Backend**: Next.js API Routes, Prisma ORM.
- **Banco de Dados**: PostgreSQL.
- **Autenticação**: JWT, cookies, hashing de senhas com Argon2.
- **Surveys**: Survey.js (Core, React UI, PDF).
- **Outros**: Next Themes para gerenciamento de temas, Lucide React para ícones.

## Estrutura do Projeto

- `src/app/`: Páginas e rotas da aplicação.
- `src/components/`: Componentes reutilizáveis (Header, Nav, Surveys, etc.).
- `src/auth/`: Lógica de autenticação (JWT, cookies, sessões).
- `prisma/`: Schema do banco de dados e migrações.
- `data/`: Dados estáticos para os surveys.

## Como Executar

1. Instale as dependências: `npm install`.
2. Configure o banco de dados PostgreSQL e defina a variável `DATABASE_URL` no arquivo `.env`.
3. Execute as migrações: `npx prisma migrate dev`.
4. Inicie o servidor de desenvolvimento: `npm run dev`.

## Notas

- A funcionalidade de "Supersign" foi removida deste manual, pois não está implementada corretamente e será alterada.
- A aplicação está em desenvolvimento e pode sofrer alterações futuras.
