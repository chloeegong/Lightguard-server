
//jocelyn
//import and configure dotenv
require('dotenv').config()


//using express and cors imports
const express = require('express');
const cors = require('cors');


//using authentation token and account sid from twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new require('twilio')(accountSid, authToken);


const app = express();


app.use(cors());


//creating api call
app.get('/call-emerg', (req, res) => {
 
//twilio api to make a call from twilio phone number
  client.calls
      .create({


         twiml: '<Response><Say>Your friend is in danger. Help! Thank you.</Say></Response>',
         to: '+19094526742',
         from: '+18335671491'
       })
      .then(call => console.log(call.sid));
})


//opening server and port    
app.listen(3001, () => console.log("running on port 3001"));
