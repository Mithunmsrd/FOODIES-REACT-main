const { model,Schema} =require('mongoose');

const bookingdetails = new Schema({
    fullname: { type: String, required: true,unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirm: { type: String, required: true },
  
});

const sig = model('sign', signup);

module.exports = sig;