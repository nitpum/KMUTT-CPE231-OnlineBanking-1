const express = require('express')
const router = express.Router()

// models
const CustomerModel = require('../../models/customer/')

router.get('/', async (req, res) => {
  const n = await CustomerModel.analytic.count()
  res.send(n)
})

module.exports = router
