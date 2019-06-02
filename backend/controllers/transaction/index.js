const path = require('path')
const express = require('express')
const router = express.Router()

// models
const staffModel = require('../../models/staff')
const serviceRefModel = require('../../models/servicReference')
const chequeModel = require('../../models/cheque')
const accountModel = require('../../models/account')

// controllers
const staffControllers = require('./staff')
const queryControllers = require('./query')

const PERMISSION = {
  default: ['admin', 'general', 'manager', 'customer'],
  query: ['admin', 'general', 'manager', 'customer'],
  analytic: ['admin', 'general', 'manager'],
  create: ['general', 'manager'],
  edit: ['general', 'manager'],
  delete: ['general', 'manager']
}

router.get('/', async (req, res) => {
  const staffs = await staffModel.general.query.all()
  const serviceRefs = await serviceRefModel.serviceRef.query.all()
  const chequeIds = await chequeModel.query.all()
  const accountIds = await accountModel.account.query.all()

  res.render(path.join(__dirname, '../../views/transaction', 'index'),
    {
      staffs: staffs,
      serviceRefs: serviceRefs,
      chequeIds: chequeIds,
      accountIds: accountIds
    }
  )
})

router.post('/', (req, res) => {
  res.send(req.body)
})

router.use('/staff', staffControllers)
router.use('/query', queryControllers)

module.exports = router
