const nodemailer = require('nodemailer');

// process.env.NODE_ENV === 'production'

async function enviarTeste(){
    const contaDeTeste = await nodemailer.createTestAccount();
    const transportador = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        auth: contaDeTeste
    });

    const informacoes = await transportador.sendMail({
        from: '"Meu nome" <noreply@josimar.com.br>',
        to: 'josimarifmg@gmail.com',
        subject: 'Meu primeiro e-mail com node js',
        html: '<h1>Olá mundo node</h1> <p>Este é um e-mail de verdade</p>'
    });

    return nodemailer.getTestMessageUrl(informacoes);
}

module.exports = {
    enviarTeste
}