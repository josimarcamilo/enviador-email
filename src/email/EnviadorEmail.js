const nodemailer = require('nodemailer');

// process.env.NODE_ENV === 'production'

async function configuracaoEmail(){
    if (true){
        const configTest = {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "fabdbd652a3822",
              pass: "fb5f34a0740204"
            }
          };

        return configTest;
    }

        const configProducao ={
            host: 'mail.orfed.com.br',
            name: 'orfed.com.br',
            port: 465,
            auth: {
                user: 'contato@orfed.com.br',
                pass: 'HCE30#$ajc'
            },
            secure: true
        };
        return configProducao;
    
}

async function enviarTeste(){
    
    const contaDeTeste = await configuracaoEmail();
    const transportador = nodemailer.createTransport(contaDeTeste);

    transportador.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("O servidor está pronto para receber nossas mensagens");
        }
      });

    const informacoes = await transportador.sendMail({
        from: '"Meu nome" <contato@orfed.com.br>',
        to: 'josimarifmg@gmail.com',
        subject: 'Meu primeiro e-mail com node js',
        html: '<h1>Olá mundo node</h1> <p>Este é um e-mail de verdade</p>'
    });
    // console.log(informacoes);
    console.log(nodemailer.getTestMessageUrl(informacoes));
}

module.exports = {
    enviarTeste
}