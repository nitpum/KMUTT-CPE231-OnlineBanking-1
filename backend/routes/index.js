const admin = require('../controllers/admin')

module.exports = app => {
  // controllers
  app.use('/admin', admin)

  app.use('*', (req, res) => {
    res.send('online banking system')
  })
}
