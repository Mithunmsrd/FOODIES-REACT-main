const { model,Schema} =require('mongoose');

const signup = new Schema({
    Name: { type: String, required: true,unique: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    });

const sig = model('sign', signup);

module.exports = sig;