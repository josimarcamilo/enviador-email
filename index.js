const express = require('express');

const app = express();

app.listen(3000, function () {
    console.log("API rodando");
});

app.get('/', function (req, res) {
    res.send('API tudo okk');
});