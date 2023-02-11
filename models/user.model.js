const { mongoose } = require("mongoose");
const bcrypt = require("bcrypt"); 

/*
This schema creates a new user. 
*/
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

userSchema.pre('save', async function(next) {
  const user = this; 
  const salt = await bcrypt.genSalt(10); 
  user.password = await bcrypt.hash(user.password, salt); 
  next(); 
}); 

const User = mongoose.model('User', userSchema)
module.exports = User;