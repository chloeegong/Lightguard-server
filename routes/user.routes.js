const controller = require('../controllers/user.controller')

module.exports = function(app) {
  app.get('/api/users/get-all-users', controller.getAllUsers)
  app.post('/auth/users/create-user', controller.createUser)
}