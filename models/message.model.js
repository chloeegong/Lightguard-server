//jocelyn
const { mongoose } = require("mongoose");

//mongoose schema creation
//work review 3: added message capability
const messageEmergContactSchema = new mongoose.Schema({
  messageDescription: { type: String, required: true },
  to: { type: String }, 
  sid: { type: String },
})

const MessageEmergContact = mongoose.model('MessageEmergContact', messageEmergContactSchema)
module.exports = MessageEmergContact; 