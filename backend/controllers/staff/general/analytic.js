const express = require('express')
const router = express.Router()

// models
const StaffModel = require('../../../models/staff/general')

router.get('/', async (req, res) => {
  const n = await StaffModel.analytic.count()

  const parser = { ...n }

  res.send(parser)
})

module.exports = router
