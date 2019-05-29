const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// models
const AccountModel = require('../../models/account/')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined

  if (id) {
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

module.exports = router
