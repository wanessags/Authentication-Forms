
# Authentication Forms — React + Tailwind CSS

Projeto desenvolvido na Aula 12 com o objetivo de construir uma interface de autenticação utilizando React, JavaScript, Vite e Tailwind CSS.

A aplicação apresenta formulários de Login (Sign In) e Cadastro (Sign Up), seguindo a referência visual disponibilizada pelo professor no Figma.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS
- React Icons
- Node.js e npm

## Funcionalidades

- Formulário de Login (Sign In)
- Formulário de Cadastro (Sign Up)
- Alternância entre formulários sem recarregar a página
- Componentes reutilizáveis
- Inputs controlados com useState
- Validação dos campos obrigatórios
- Validação do formato do e-mail
- Validação do tamanho mínimo da senha
- Mensagens de erro
- Estado de loading
- Feedback de validação
- Botões sociais demonstrativos
- Interface responsiva

## Estrutura do projeto

```text
src/
├── components/
│   ├── ui/
│   │   ├── AuthBadge.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── SocialButton.jsx
│   ├── auth/
│   │   ├── AuthDivider.jsx
│   │   ├── SignInForm.jsx
│   │   ├── SignUpForm.jsx
│   │   └── SocialLogin.jsx
│   └── layout/
│       └── BackgroundEffects.jsx
├── pages/
│   └── AuthPage.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Como executar

Clone o repositório:

```bash
git clone https://github.com/wanessags/Authentication-Forms.git
```

Entre na pasta:

```bash
cd Authentication-Forms
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

Abra o endereço indicado pelo Vite no navegador.

No PowerShell, caso a execução de npm.ps1 seja bloqueada, utilize npm.cmd.

## Verificação das versões

Comandos utilizados:

```bash
node --version
npm --version
npm ls react
npm ls vite
npm ls tailwindcss
```

Versões do ambiente:

- Node.js: preencher após verificação
- npm: preencher após verificação
- React: preencher após verificação
- Vite: preencher após verificação
- Tailwind CSS: preencher após verificação

## Testes realizados

- Navegação entre Login e Cadastro
- Validação de campos vazios
- Validação de e-mail inválido
- Validação de senha curta
- Exibição de mensagens de erro
- Loading e feedback de validação
- Exibição dos botões sociais
- Responsividade da interface

## Observações

Esta aplicação possui finalidade acadêmica.

Não existe integração com backend, banco de dados ou serviço real de autenticação.

Os envios são simulados no frontend, com validações locais e mensagens demonstrativas.

As senhas não são armazenadas em localStorage nem exibidas no console.

## Referência

Aula 12 — Authentication Forms — React + Tailwind CSS.

Design visual baseado nos artboards Sign In e Sign Up do Figma disponibilizado pelo professor.
