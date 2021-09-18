const knex = require('../database');
const {createToken} = require('../services/Jwt');

module.exports ={
    async listar(req, res) {
        // const usuarios = await knex.select('id').select('email').select('senha').select('token').from('usuarios');
        const usuarios = await knex.select('*').from('users');

        return res.json(usuarios);
    },

    async inserir(req, res, next){
        const { email, password } = req.body;        
        const token = createToken({email});

        try {
            await knex('users').insert({ email, password, token });
            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    }
}