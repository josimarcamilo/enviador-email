const enviadorEmail = require("../email/EnviadorEmail");

module.exports = {
    async enviar(req, res) {
        const link = await enviadorEmail.enviarTeste();

        res.json({link});
    }
}