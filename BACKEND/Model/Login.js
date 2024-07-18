const { model,Schema} =require('mongoose');

const login = new Schema({
    Email: { type: String, required: true,unique: true },
    Password: { type: String, required: true },
    
  
});

const log = model('login', login);

module.exports = log;