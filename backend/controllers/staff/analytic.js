const express = require('express')
const router = express.Router()

// models
const StaffModel = require('../../models/staff')

router.get('/', async (req, res) => {
  const n = await StaffModel.analytic.count()
  const ageRange = await StaffModel.analytic.age()

  const parser = {
    ...n, ageRange: ageRange
  }

  res.send(parser)
})

module.exports = router
