// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
//import and configure dotenv
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



client.calls
      .create({
         twiml: '<Response><Say>Your friend is in danger. Help! Thank you.</Say></Response>',
         to: '+19094526742',
         from: '+18335671491'
       })
      .then(call => console.log(call.sid));