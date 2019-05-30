const express = require('express')
const router = express.Router()

// models
const StaffModel = require('../../../models/staff/manager')

router.get('/', async (req, res) => {
  const n = await StaffModel.analytic.count()

  const parser = { ...n }

  res.send(parser)
})

router.get('/overview', async (req, res) => {
  const age = date => new Date(new Date() - date.getTime()).getUTCFullYear() - 1970

  const managers = await StaffModel.schema.find({ permission: 'manager' })

  const ages = managers.map(({ birthDate }) => age(birthDate))

  res.json({
    total: managers.length,
    avgAge: ages.reduce((acc, val) => acc + val, 0) / managers.length,
    minAge: Math.min(...ages),
    maxAge: Math.max(...ages)
  })
})

module.exports = router
