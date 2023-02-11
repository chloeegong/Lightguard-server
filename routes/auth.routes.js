const controller = require('../controllers/auth.controller')

module.exports = function(app) {
  app.post('/api/auth/login', controller.login)
  app.post('/auth/users/student-register', controller.studentRegister)
}