#Anotações

Gerar hash com node:
node -e "console.log(require('crypto').randomBytes(256).toString('base64'))"

Migration CLI
https://knexjs.org/#Migrations-CLI

The migration CLI is bundled with the knex install, and is driven by the node-liftoff module. To install globally, run:

$ npm install knex -g

npx knex init

npx knex migrate:make create_table_usures