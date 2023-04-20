//jocelyn
const { mongoose } = require("mongoose");

//mongoose creating call schema
const callEmergServicesSchema = new mongoose.Schema({
  to: { type: String }, 
  sid: { type: String },
})

const CallEmergServices = mongoose.model('CallEmergServices', callEmergServicesSchema)
module.exports = CallEmergServices; 