# site

login-com-javascript.vercel.app

# Simple Login Page

Uma página simples de **autenticação de usuário** desenvolvida para fins de aprendizado.  
O projeto simula um sistema básico de **login**, **criação de conta** e **recuperação de senha**, utilizando JavaScript para validações e interações na interface.

O objetivo foi praticar **manipulação do DOM**, validação de formulários e interatividade básica no front-end.

---

## Sobre o projeto

Este projeto representa uma interface simples de autenticação, semelhante às encontradas em sites reais.

Ele inclui validações básicas e pequenas funcionalidades feitas em **JavaScript puro**, simulando o comportamento de um sistema de login.

⚠️ Não há conexão com backend ou banco de dados.  
Todas as funcionalidades são apenas **simulações para aprendizado**.

---

## Funcionalidades

A página possui três fluxos principais:

### Login
Permite que o usuário insira:

- Email
- Senha

Validações implementadas:

- Campo de email obrigatório
- Verificação simples de formato de email (necessário conter `@`)
- Campo de senha obrigatório

---

### Criar conta (Logon)

Simulação de criação de conta contendo:

- Email
- Senha

Com validações básicas semelhantes ao login.

---

### Esqueci minha senha

Fluxo simulado de recuperação de senha.

Funcionamento:

1. O usuário insere o **email**
2. Se o email estiver em um formato válido (contendo `@`), aparece um **campo para código de verificação**
3. O código é apenas **visual (fake)** e serve somente para simular a interface

Também há validação de formato para o código inserido.

---

## Recursos implementados com JavaScript

O projeto utiliza **JavaScript básico** para adicionar interatividade:

- Validação simples de email
- Verificação de campos obrigatórios
- Exibição do campo de código no fluxo de recuperação de senha
- Alternância entre **mostrar e esconder senha**
- Manipulação de elementos da página (DOM)

---

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

Nenhum framework ou biblioteca foi utilizado, pois o foco foi praticar **fundamentos do front-end**.

---

## Objetivo do projeto

Este projeto foi criado para praticar:

- Manipulação do **DOM com JavaScript**
- Validação de formulários
- Estruturação de páginas com **HTML semântico**
- Estilização com **CSS**
- Criação de interações básicas em interfaces web

---

## Status do projeto

Projeto desenvolvido apenas para **fins de estudo**.

As funcionalidades são **simulações visuais**, e não há:

- autenticação real
- armazenamento de usuários
- conexão com backend
- banco de dados

---

## Como visualizar o projeto

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/simple-login-page.git
```
execute o arquivo index.html
