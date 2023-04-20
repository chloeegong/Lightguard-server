//jocelyn
const controller = require('../controllers/call.controller')
//http request get
module.exports = function(app) {
  app.get('/call-emerg', controller.callEmergServices)
}