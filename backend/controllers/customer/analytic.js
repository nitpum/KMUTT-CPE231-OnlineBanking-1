const express = require('express')
const router = express.Router()

// models
const CustomerModel = require('../../models/customer/')

router.get('/', async (req, res) => {
  const n = await CustomerModel.analytic.count()
  const bal = await CustomerModel.analytic.balance.all()

  res.send({
    ...n, ...bal
  })
})

router.get('/', (req, res) => {
  CustomerModel.analytic.count()
    .then(n => res.send(n))
    .catch(err => res.send(String(err)))
})

module.exports = router
