# Adonis application - Sistema de Login e Registro
instalar adonisjs-cli / pm i -g @adonisjs/cli

- Se o npm estiver dando problema é necessario a utilização do YARN

Organização das pastas.

- app
    - Controllers/Htpp | Aqui fica os controles da aplicação
    - Models | Aqui fica os modelos utilizados na aplicação
- resources/view | Aqui fica os arquivos do Edge engine
- database / migrations | Migrações do projeto
- start
    - app.js | arquivo principal do projeto
    - routes.js | Aqui fica as rotas que serão utilizadas
- .env | editar os dados do banco

## Setup

para instalar as dependencias.

```bash
    yarn install --flags
```

ou se utilizar o npm `npm install`.

executando o projeto

```bash
    yarn test
```
ou pelo npm `npm test`.

### Para mexer nas configurações

para mexer no cadastro

- app/Controllers/Http/RegisterController.js | para adicionar a atualização das requisições ao banco

- database/migrations/1503248427885_user.js | para adicionar novos dados ao banco

fazer a migração

```bash
adonis migration:run
```

Editar o resources/views/home.edge | para criar links para o /login e /register

arquivo .env


DB_CONNECTION=banco de dados utilizado

DB_HOST=127.0.0.1

DB_PORT=porta do banco

DB_USER=usuário

DB_PASSWORD=senha

DB_DATABASE=nome do banco
