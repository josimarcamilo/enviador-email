
exports.up = function(knex) {
    return knex.schema.table('usuarios', function(table){
        table.string('token');
    });
};

exports.down = function(knex) {
    return knex.schema.table('usuarios', function(table){
        table.dropColumn('token');
    });
};
