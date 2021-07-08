
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        table.increments('id').primary();
        table.string('email').unique().notNullable();
        table.string('senha').notNullable();

        table.timestamps()
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
};
