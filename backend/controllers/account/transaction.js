const express = require('express')
const router = express.Router()

// models
const accountModel = require('../../models/account')

router.post('/withdraw', (req, res) => {
  const id = req.body.id
  const amount = req.body.amount
  accountModel.account.transaction.withdraw(id, amount)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.post('/deposit', (req, res) => {
  const id = req.body.id
  const amount = req.body.amount
  accountModel.account.transaction.deposit(id, amount)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.post('/setStatus', (req, res) => {
  const id = req.body.id
  const status = req.body.status
  accountModel.account.transaction.setStatus(id, status)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

module.exports = router
