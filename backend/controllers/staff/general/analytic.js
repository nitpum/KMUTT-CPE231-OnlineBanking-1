const express = require('express')
const router = express.Router()

// models
const StaffModel = require('../../../models/staff/general')

router.get('/', async (req, res) => {
  const n = await StaffModel.analytic.count()

  const parser = { ...n }

  res.send(parser)
})

router.get('/count', async (req, res) => {
  const age = date => new Date(new Date() - date.getTime()).getUTCFullYear() - 1970
  // const position = req.query.position || undefined
  const staffs = await StaffModel.query.all()

  res.json({
    totalStaff: staffs.length,
    avgAgeStaff: staffs
      .map(({ birthDate }) => age(birthDate))
      .reduce((acc, val) => acc + val, 0) / staffs.length
  })
})

module.exports = router
