module.exports = {

  development: {
    host: process.env.TEST_EMAIL_HOST,
    name: process.env.TEST_EMAIL_NAME,
    port: process.env.TEST_EMAIL_PORT,
    auth: {
      user: process.env.TEST_EMAIL_USER,
      pass: process.env.TEST_EMAIL_PASS
    },
    secure: process.env.TEST_EMAIL_SECURE == 'true'
  },

  production: {
    host: process.env.EMAIL_HOST,
    name: process.env.EMAIL_NAME,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    secure: process.env.EMAIL_SECURE == 'true'
  }

};
