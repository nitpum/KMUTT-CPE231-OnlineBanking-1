const admin = require('../controllers/admin')
const branch = require('../controllers/branch')
const staff = require('../controllers/staff')
const customer = require('../controllers/customer')
const organization = require('../controllers/organization')
const account = require('../controllers/account/')
const serviceRef = require('../controllers/serviceReference')
const transaction = require('../controllers/transaction')
const cheque = require('../controllers/cheque')
const card = require('../controllers/card')
const info = require('../controllers/info')

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
  app.use('/account', account)
  app.use('/service-reference', serviceRef)
  app.use('/transaction', transaction)
  app.use('/cheque', cheque)
  app.use('/card', card)
  app.use('/info', info)

  app.use('*', (req, res) => {
    res.send('online banking system')
  })
}
