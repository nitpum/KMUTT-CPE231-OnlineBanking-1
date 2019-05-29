const path = require('path')
const express = require('express')
const router = express.Router()

// models
const staffModel = require('../../../models/staff')
const accountModel = require('../../../models/account')
const chequeModel = require('../../../models/cheque')
const serviceRefModel = require('../../../models/servicReference')

router.get('/', (req, res) => {
  res.send('transaction staff jaa')
})

router.get('/cheque', async (req, res) => {
  const staffs = await staffModel.query.all()
  const accountIds = await accountModel.account.query.all()
  const chequeIds = await chequeModel.query.status('ACTIVE')
  const serviceRefs = await serviceRefModel.serviceRef.query.all()

  res.render(path.join(__dirname, '../../../views/transaction/staff', 'cheque'),
    {
      staffs: staffs,
      accountIds: accountIds,
      chequeIds: chequeIds,
      serviceRefs: serviceRefs
    }
  )
})

router.post('/cheque', (req, res) => {
  res.send(req.body)
})

module.exports = router
