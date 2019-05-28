const admin = require('../controllers/admin')
const branch = require('../controllers/branch')
const staff = require('../controllers/staff')
const customer = require('../controllers/customer')
const organization = require('../controllers/organization')

/**
 * router HTTP function top on express.js
 * @param  {Object} app - only accept express router function, method
 */
module.exports = app => {
  // controllers
  app.use('/admin', admin)
  app.use('/branch', branch)
  app.use('/staff', staff)
  app.use('/customer', customer)
  app.use('/organization', organization)

  app.use('*', (req, res) => {
    res.send('online banking system')
  })
}
