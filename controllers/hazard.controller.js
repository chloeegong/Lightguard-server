const Hazard = require('../models/hazard.model'); 

const addHazard = async(req, res) => {
  try {
    const newHazard = new Hazard(req.body); 
    await newHazard.save(); 

    return res.status(201).send(newHazard); 
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}

const getAllHazards = async = async(req, res) => {
  try {
    const hazards = await Hazard.find(); 
    return res.status(200).send(hazards)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}

module.exports = { addHazard, getAllHazards }