const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const axios = require('axios');

require('dotenv').config();

passport.use(new BasicStrategy( async function(email, password, cb) {
  try {
    console.log(config.apiUrl);
    const { data, status } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/api/auth/sign-in`,
      data: {
        apiKeyToken: process.env.API_KEY_TOKEN
      },
      auth: {
        password,
        username: email,
      },
    });

    if (!data || status != 200) {
      cb(boom.unauthorized(), false);
    };

    return cb(null, data);

  }catch(error) {
    cb(error);
  };

}));