// Download the helper library from https://www.twilio.com/docs/node/install
// in console, need to do "npm install twilio"
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
//jocelyn
//import and configure dotenv
require('dotenv').config()
//using express and cors imports
const express = require('express');
const cors = require('cors');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const app = express();


app.use(cors());


//creating api call
app.get('/message_contact', (req, res) => {


  //sends message to/from specified phone numbers
  client.messages
    .create({
      //message sent
      body: 'Your friend has shared their location with you.',
      //twilio given phone number
      from: '+18335671491',
      //specify what phone number message is sent to
      to: '+19094526742'
    })
    .then(message => console.log(message.sid));
  })
//opening server and port    
app.listen(3001, () => console.log("running on port 3001"));
  //to run: type "node send_sms.js" in console