const enviadorEmail = require("../email/EnviadorEmail");

module.exports = {
    async enviar(req, res) {
        
        enviadorEmail.send().catch(console.log);

        res.send();
    }
}