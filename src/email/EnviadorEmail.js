const nodemailer = require('nodemailer');
const confEmailServer = require('../../confEmail');

// process.env.NODE_ENV === 'production'

async function configuracaoEmail(){ 
  return (process.env.NODE_ENV === 'production' ? confEmailServer.production : confEmailServer.development);  
}

async function send(){
    
    const contaDeTeste = await configuracaoEmail();
    const transportador = nodemailer.createTransport(contaDeTeste);

    transportador.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("O servidor está pronto para receber nossas mensagens");
        }
      });

    await transportador.sendMail({
        from: '"Meu nome" <contato@orfed.com.br>',
        to: 'josimarifmg@gmail.com',
        subject: 'Meu primeiro e-mail com node js',
        html: '<h1>Olá mundo node</h1> <p>Este é um e-mail de verdade</p>'
    });
    console.log("e-mail enviado!");
  
}

module.exports = {
    send
}