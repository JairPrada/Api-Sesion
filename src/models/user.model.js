const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        default: 'NOT VERIFIED'
    }
})
const User = new model('user', userSchema);
module.exports = User;