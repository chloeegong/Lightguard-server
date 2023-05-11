//jocelyn
//import and configure dotenv
require('dotenv').config()

//using express and cors imports
const User = require('../models/message.model')
const express = require('express');
const cors = require('cors');
const MessageEmergContact = require('../models/message.model');
const app = express();
app.use(cors());

//using authentation token and account sid from twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new require('twilio')(accountSid, authToken);

const messageEmergContact = async (req, res) => {
  
    try{
      //added for review 3: getting message 
      const textMessage = await MessageEmergContact.findOne({ messageDescription: req.body.messageDescription }); 
        //twilio api to make a message from twilio phone number
        //sends message to/from specified phone numbers
  client.messages
  .create({
    //message sent
    body: 'This is LightGuard. Our user indicated that they are near Engineering and Computer Science and require your assistance while on their walk around campus. Please locate and ensure they are safe. Thank you.',
    //twilio given phone number
    from: '+18335671491',
    //specify what phone number message is sent to
    to: '+19094526742'
  })
  .then(message => console.log(message.sid));

        return res.status(201).send({ message: 'This is LightGuard. Our user indicated that they are near Engineering and Computer Science and require your assistance while on their walk around campus. Please locate and ensure they are safe. Thank you.' })
    } catch (error) {
        console.log(`error in message.controller login function: ${error.message}`); 
        return res.status(500).send({ message: error.message }); 
      }
    
}

module.exports = { messageEmergContact }
