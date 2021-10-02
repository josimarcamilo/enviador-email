const jwt = require('jsonwebtoken');

function createToken(payload)
{
    return jwt.sign(payload, process.env.SECRET_TOKEN_JWT);
}

module.exports = {
    createToken
}