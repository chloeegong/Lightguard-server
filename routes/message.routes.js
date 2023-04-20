//jocelyn
const controller = require('../controllers/message.controller')
//http request get
module.exports = function(app) {
  app.get('/message_contact', controller.messageEmergContact)
}