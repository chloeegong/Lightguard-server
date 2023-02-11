const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const config = require('../config/auth.config'); 
const User = require('../models/user.model'); 

const studentRegister = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: 'There is already a user with this email' })
    }

    const newUser = new User(req.body);
    const token = generateToken(newUser._id); 
    await newUser.save();

    return res.status(201).send({ message: 'User created', token: token, newUser})
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}

const login = async (req, res) => {
  console.log(`req.body in auth.controller/login: ${JSON.stringify(req.body)}`); 

  try {
    const user = await User.findOne({ email: req.body.email }); 
    console.log('user in login', user); 
    if(!user) {
      return res.status(404).send({ message: 'No user with this email address'})
    } 
    // compares the password between User passed from req.user and 
    // password provided from req body 

    // req.body.password = await hashPassword(req.body.password)
    let passwordIsValid = await bcrypt.compareSync(req.body.password, user.password); 
    // let passwordIsValid = await bcrypt.compare(req.body.password, user.password); 

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null, 
        message: 'Invalid password',
      }); 
    }
    let _token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: '1h', 
    }); 

    // sent to the frontend 
    console.log('res in login', res); 
    return res.status(200).send({
      id: user._id, 
      user: user, 
      accessToken: _token, 
    }); 
  } catch (error) {
    console.log(`error in auth.controller login function: ${error.message}`); 
    return res.status(500).send({ message: error.message }); 
  }
}

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d"});
}

module.exports = { studentRegister, login }