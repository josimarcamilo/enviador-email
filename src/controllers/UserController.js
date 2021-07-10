const knex = require('../database');

module.exports ={
    async listar(req, res) {
        const usuarios = await knex('usuarios');

        return res.json(usuarios);
    }
}