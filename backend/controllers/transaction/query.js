const router = require('express').Router()
const mongoose = require('mongoose')

const transactionModel = require('../../models/transaction')

router.get('/overview', async (req, res) => {
  const from = new Date(req.query.from)
  const to = new Date(new Date(req.query.to).setHours(23, 59, 59))

  const transaction = await transactionModel.schema.find({
    $and: [
      { timestamp: { $gte: from } },
      { timestamp: { $lte: to } }
    ],
    branch: mongoose.Types.ObjectId(req.session.passport.user.branch)
  })

  const deposit = transaction
    .filter(({ type }) => type === 'DEPOSIT')
  const withdrawal = transaction
    .filter(({ type }) => type === 'WITHDRAW')

  const total = arr => arr.reduce((acc, { amount }) => acc + amount, 0)
  const min = arr => Math.min(...arr.map(({ amount }) => amount))
  const max = arr => Math.max(...arr.map(({ amount }) => amount))
  const avg = arr => total(arr) / arr.length

  res.json({
    totalDep: total(deposit),
    minDep: min(deposit),
    maxDep: max(deposit),
    avgDep: avg(deposit),
    totalWdl: total(withdrawal),
    minWdl: min(withdrawal),
    maxWdl: max(withdrawal),
    avgWdl: avg(withdrawal)
  })
})

module.exports = router
