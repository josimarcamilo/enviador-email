const knex = require('../database');

module.exports ={
    async listar(req, res) {
        const usuarios = await knex('usuarios');

        return res.json(usuarios);
    },

    async inserir(req, res, next){
        const { email, senha } = req.body;        

        try {
            await knex('usuarios').insert({ email, senha });
            return res.status(201).send();
        } catch (error) {
            next(error);
        }

    }
}