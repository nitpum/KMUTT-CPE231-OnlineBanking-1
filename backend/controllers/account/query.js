const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// models
const AccountModel = require('../../models/account/')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    AccountModel.account.query.search(search)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  }
  else if (id) {
    AccountModel.account.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else {
    AccountModel.account.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  }
})

router.get('/branch/me', async (req, res) => {
  const accounts = await AccountModel.account.schema.aggregate([
    {
      $match: {
        branchId: mongoose.Types.ObjectId(req.session.passport.user.branch)
      }
    },
    {
      $lookup: {
        from: 'customers',
        localField: 'customerId',
        foreignField: '_id',
        as: 'customer'
      }
    },
    {
      $lookup: {
        from: 'branches',
        localField: 'branchId',
        foreignField: '_id',
        as: 'branch'
      }
    },
    {
      $project: {
        accountId: 1,
        holder: {
          $concat: [
            { $arrayElemAt: ['$customer.name.firstName', 0] },
            ' ',
            { $arrayElemAt: ['$customer.name.lastName', 0] }
          ]
        },
        branch: { 
          $arrayElemAt: ['$branch.name', 0]
        }
      }
    }
  ])
  res.send(accounts)
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
