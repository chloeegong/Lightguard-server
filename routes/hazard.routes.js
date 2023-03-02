const controller = require('../controllers/hazard.controller.js')

module.exports = function(app) {
  app.get('/api/hazard/get-all-hazards', controller.getAllHazards) 
  app.post('/api/hazard/add-hazard', controller.addHazard)
}