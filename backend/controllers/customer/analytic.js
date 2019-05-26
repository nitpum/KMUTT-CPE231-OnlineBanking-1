const express = require('express')
const router = express.Router()

// models
const CustomerModel = require('../../models/customer/')

router.get('/', async (req, res) => {
  const n = await CustomerModel.analytic.count()
  const bal = await CustomerModel.analytic.balance.all()
  const ageRange = await CustomerModel.analytic.age()

  const parser = {
    ...n, ...bal, ageRange: ageRange
  }
  res.send(parser)
})

module.exports = router
