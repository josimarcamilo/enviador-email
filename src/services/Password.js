const bcrypt = require('bcrypt');

async function createHash(password)
{
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

async function compare(password, hash)
{
    console.log(password, hash);
    
    return await bcrypt.compare(password, hash);
}

module.exports = {
    createHash,
    compare
}