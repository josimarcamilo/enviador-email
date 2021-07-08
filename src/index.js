const express = require('express');
const knex = require('./database');


const app = express();

app.get('/users', function (req, res) {
    knex('usuarios').then((resultados) => {
        res.json(resultados);
    })
});

app.listen(3000, function () {
    console.log("API rodandooooo");
});