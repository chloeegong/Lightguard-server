const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const config = require('../config/auth.config'); 
const User = require('../models/user.model')

const login = async (req, res) => {
  console.log(`req.body in auth.controller/login: ${JSON.stringify(req.body)}`); 

  try {
    const user = await User.findOne({ email: req.body.email }); 
    console.log('user in login', user); 
    if (!user) {
      return res 
        .status(404)
        .send({ message: 'No user with this email address.' }); 
    }

    // comparing passwords to validate 
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password); 

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid password',
      }); 
    }
    let _token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: config.jwtExpiration,
    }); 
    let userRefreshToken = await RefreshToken.createToken(user); 

    // to the frontend
    console.log(`res in login`, res); 
    return res.status(200).send({
      id: user._id, 
      user: user, 
      accessToken: _token, 
      refreshToken: userRefreshToken,
    }); 
  } catch (err) {
    console.log(`error in auth.controller login function: ${err.message}`); 
    return res.status(500).send({ message: error.message })
  }
}; 

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.JWT_SECRET);
}

module.exports = {
  login
}