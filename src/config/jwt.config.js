const jwt = require('jsonwebtoken');
require('dotenv').config();
const getToken = (payload) => {
    return jwt.sign({
        data: payload
    }, process.env.SECRET, { expiresIn: '1h' })
}
const getTokenData = (token) => {
    let data = null;
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            cosnole.log("Error al obtener data del token");
        } else {
            data = decoded;
        }
    });
    return data;
}
module.exports = { getToken, getTokenData };