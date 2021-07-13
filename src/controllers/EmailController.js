const enviadorEmail = require("../email/EnviadorEmail");

module.exports = {
    async enviar(req, res) {
        
        enviadorEmail.enviarTeste().catch(console.log);

        res.send();
    }
}