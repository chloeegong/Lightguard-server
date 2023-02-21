const { mongoose } = require("mongoose");

const callEmergServicesSchema = new mongoose.Schema({
  to: { type: String }, 
  sid: { type: String },
})

const CallEmergServices = mongoose.model('CallEmergServices', callEmergServicesSchema)
module.exports = CallEmergServices; 