const { mongoose } = require("mongoose");
const bcrypt = require("bcrypt"); 

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, length: 10 },
  emergencyContacts: [{
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true }
  }]
})

const User = mongoose.model('User', userSchema)
module.exports = User;