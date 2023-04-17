//jocelyn
//import and configure dotenv
require('dotenv').config()

//using express and cors imports
const User = require('../models/call.model')
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//using authentation token and account sid from twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new require('twilio')(accountSid, authToken);

const callEmergServices = async (req, res) => {
    try{
        //twilio api to make a call from twilio phone number
        client.calls
        .create({


        twiml: '<Response><Say>Your friend is in danger. Help! Thank you.</Say></Response>',
        to: '+19094526742',
        from: '+18335671491'
        })
        .then(call => console.log(call.sid)); 

        return res.status(201).send({ message: 'Calling emergency services' })
    } catch (error) {
        console.log(`error in call.controller login function: ${error.message}`); 
        return res.status(500).send({ message: error.message }); 
      }
    
}

module.exports = { callEmergServices }
