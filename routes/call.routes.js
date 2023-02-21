const controller = require('../controllers/call.controller')

module.exports = function(app) {
  app.get('/call-emerg', controller.callEmergServices)
}