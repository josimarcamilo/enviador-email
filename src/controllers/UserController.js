const knex = require('../database');
const { createToken } = require('../services/Jwt');
const { createHash, compare } = require('../services/Password');

module.exports ={
    async listar(req, res) {
        // const usuarios = await knex.select('id').select('email').select('senha').select('token').from('usuarios');
        const usuarios = await knex.select('*').from('users');

        return res.json(usuarios);
    },

    async inserir(req, res, next){
        let { email, password } = req.body; 
        
        password = await createHash(password);
        const token = createToken({email});

        try {
            await knex('users').insert({ email, password, token });
            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async login(req, res, next){
        let { email, password } = req.body; 
        const findhash = await knex.first('password', 'token').from('users').where('email', email);
        if (await compare(password, findhash.password))
        {
            return res.json({"token": findhash.token});
        }
        next(new Error('Falha no login.'));
    }
}