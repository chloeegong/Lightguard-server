const { mongoose } = require("mongoose");

const hazardSchema = new mongoose.Schema({
  criminalActivity: { type: Boolean }, 
  construction: { type: Boolean },
  blockedPath: { type: Boolean }, 
  other: { type: Boolean }  
})

const Hazard = mongoose.model('Hazard', hazardSchema)
module.exports = Hazard; 