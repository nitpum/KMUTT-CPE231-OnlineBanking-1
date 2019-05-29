const express = require('express')
const router = express.Router()

// models
const chequeModel = require('../../models/cheque')
const accountModel = require('../../models/account')
const transactionModel = require('../../models/transaction')

router.post('/cashup', async (req, res) => {
  try {
    const id = req.body.id
    const validCheque = await chequeModel.transaction.valid(id)
    const chequeId = validCheque._id
    const amount = validCheque.amount
    const accId = validCheque.accountId
    const acc = await accountModel.account.transaction.withdraw(accId, amount)
    const transactionAdd = await transactionModel.cheque.cashUp(chequeId, validCheque, acc)
    const updatedCheque = await chequeModel.transaction.cashUp(chequeId)
    const result = { ...acc, ...updatedCheque, ...transactionAdd }
    console.log(result)
    res.send(result)
  } catch (err) {
    res.status(400).send(String(err))
  }
})

module.exports = router
