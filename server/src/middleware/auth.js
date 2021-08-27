const expressJwt = require('express-jwt');

require('dotenv').config();

const auth = expressJwt ({
  secret: process.env.JWT_SECRET_KEY,
  algorithms: ["HS256"],
});

module.exports = auth;