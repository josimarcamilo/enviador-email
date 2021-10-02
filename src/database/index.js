const knexfile = require ('../../knexfile');

const confDataBase = ( process.env.NODE_ENV === 'production'? knexfile.production : knexfile.development );
const knex = require('knex')(confDataBase);

module.exports = knex;