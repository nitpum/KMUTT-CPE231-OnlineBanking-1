const admin = require('../controllers/admin')
const branch = require('../controllers/branch')

/**
 * router HTTP function top on express.js
 * @param  {Object} app - only accept express router function, method
 */
module.exports = app => {
  // controllers
  app.use('/admin', admin)
  app.use('/branch', branch)

  app.use('*', (req, res) => {
    res.send('online banking system')
  })
}
