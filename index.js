const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_SRV, {
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to database')
}).catch((error) => {
  console.error('Connection error', error)
  process.exit(); 
})

require('./routes/user.routes')(app)
require('./routes/auth.routes')(app)
require('./routes/hazard.routes')(app)
require('./routes/call.routes')(app)
require('./routes/message.routes')(app)

app.listen(3001, () => {
  console.log(`Server running on port 3001`)
})