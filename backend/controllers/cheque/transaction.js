const express = require('express')
const router = express.Router()

// models
const chequeModel = require('../../models/cheque')
const accountModel = require('../../models/account')

router.post('/cashup', async (req, res) => {
  try {
    const id = req.body.id
    const validCheque = await chequeModel.transaction.valid(id)
    const chequeId = validCheque._id
    const amount = validCheque.amount
    const accId = validCheque.accountId
    const acc = await accountModel.account.transaction.withdraw(accId, amount)
    const updatedCheque = await chequeModel.transaction.cashUp(chequeId)
    const result = { ...acc, ...updatedCheque }
    res.send(result)
  } catch (err) {
    res.status(400).send(String(err))
  }
})

module.exports = router
