const express = require('express');
const userController = require('./controllers/UserController');

const app = express();

app.use(express.json());

app.get('/users', userController.listar);
app.post('/users', userController.inserir);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);

});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message});
});

app.listen(3000, function () {
    console.log("API rodandooooo");
});