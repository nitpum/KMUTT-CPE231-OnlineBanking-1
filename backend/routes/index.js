const admin = require('../controllers/admin')
const branch = require('../controllers/branch')
const staff = require('../controllers/staff')
const customer = require('../controllers/customer')
const organization = require('../controllers/organization')
const account = require('../controllers/account/')
const serviceRef = require('../controllers/serviceReference')
const transaction = require('../controllers/transaction')
const cheque = require('../controllers/cheque')
<<<<<<< HEAD
const card = require('../controllers/card')
=======
const info = require('../controllers/info')
>>>>>>> bce03e501c507abe7259ddf23e11e5d12718ce89

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
<<<<<<< HEAD
  app.use('/card', card)
=======
  app.use('/info', info)
>>>>>>> bce03e501c507abe7259ddf23e11e5d12718ce89

  app.use('*', (req, res) => {
    res.send('online banking system')
  })
}
