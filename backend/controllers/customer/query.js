const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// models
const CustomerModel = require('../../models/customer/')
const AccountModel = require('../../models/account')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    CustomerModel.query.search(search, limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else if (id) {
    CustomerModel.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else {
    CustomerModel.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  }
})

router.get('/me', (req, res) => {
  res.json(req.session.passport.user)
})

router.get('/overview', async (req, res) => {
  const accounts = await AccountModel.account.schema.aggregate([
    { $match: {
      branchId: mongoose.Types.ObjectId(req.session.passport.user.branch)
    } },
    { $lookup: {
      from: 'transactions',
      localField: '_id',
      foreignField: 'accountId',
      as: 'transactions'
    } },
    { $lookup: {
      from: 'customers',
      localField: 'customerId',
      foreignField: '_id',
      as: 'customer'
    } }
  ])

  res.send(
    accounts
      .map(({ accountId, customer, transactions }) => ({
        accountId: accountId,
        name: [customer[0].name.firstName, customer[0].name.lastName].join(' '),
        amount: transactions.reduce((acc, { amount }) => acc + amount, 0),
        min: Math.min(...transactions.map(({ amount }) => amount)),
        max: Math.max(...transactions.map(({ amount }) => amount)),
        avg: transactions.reduce((acc, { amount }) => acc + amount, 0) / transactions.length
      }))
  )
})

module.exports = router
