const express = require('express')
const router = express.Router()

// models
const transactionModel = require('../../../models/transaction')
const accountModel = require('../../../models/account')

router.get('/', (req, res) => {
  res.send('transaction staff jaa')
})

router.post('/withdraw', async (req, res) => {
  try {
    console.log(req.body)
    const amount = req.body.amount
    const accountId = req.body.accountId
    const staffId = req.body.staffId
    const acc = await accountModel.account.transaction.withdraw(accountId, amount)
    const trasactionAdd = await transactionModel.staff.withdraw(amount, accountId, staffId)
    console.log(trasactionAdd, acc)
    const result = {
      ...trasactionAdd, ...acc
    }
    res.send(result)
  } catch (err) {
    res.status(400).send(String(err))
  }
})

module.exports = router
