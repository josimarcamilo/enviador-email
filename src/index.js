const express = require('express');
const userController = require('./controllers/UserController');

const app = express();

app.get('/users', userController.listar);

app.listen(3000, function () {
    console.log("API rodandooooo");
});