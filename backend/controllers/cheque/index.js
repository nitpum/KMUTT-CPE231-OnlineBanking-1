const path = require('path')
const express = require('express')
const router = express.Router()

const PERMISSION = {
  default: ['admin', 'general', 'manager', 'customer'],
  query: ['admin', 'general', 'manager', 'customer'],
  analytic: ['admin', 'general', 'manager'],
  create: ['general', 'manager'],
  edit: ['general', 'manager'],
  delete: ['general', 'manager']
}

// controllers
const transactionControllers = require('./transaction')
const queryControllers = require('./query')

// models
const chequeModel = require('../../models/cheque')
const organizationModel = require('../../models/organization')
const accountModel = require('../../models/account')

router.get('/', (req, res) => {
  res.send('cheque jaa')
})

router.get('/create', async (req, res) => {
  const orgs = await organizationModel.query.all()
  const accInternals = await accountModel.account.query.all()
  res.render(path.join(__dirname, '../../views/cheque/', 'create'),
    {
      organizations: orgs,
      accountIds: accInternals
    }
  )
})

router.post('/create', (req, res) => {
  let data = req.body
  // if(req.query.ourBank === 'true') {
  //   data.
  // }
  console.log(data)
  chequeModel
    .create(data)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.use('/transaction', transactionControllers)
router.use('/query', queryControllers)

module.exports = router
