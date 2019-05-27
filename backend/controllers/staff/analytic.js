const express = require('express')
const router = express.Router()

// models
const StaffModel = require('../../models/staff')

router.get('/', (req, res) => {
  StaffModel.analytic.count().then(n => res.send(n))
})

module.exports = router
