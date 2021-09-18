const nodemailer = require('nodemailer');

// process.env.NODE_ENV === 'production'

async function configuracaoEmail(){ 
  return {
    host: process.env.EMAIL_HOST,
    name: process.env.EMAIL_NAME,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    secure: process.env.EMAIL_SECURE == 'true'
  };   
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
  
}

module.exports = {
    send
}