const User = require('../models/user.model')

const createUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: 'There is already a user with this email' })
    }

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).send({ message: 'User created', newUser})
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}

async function getUser() {

}

module.exports = { createUser, getAllUsers }