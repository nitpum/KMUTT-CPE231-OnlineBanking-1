const express = require('express')
const router = express.Router()

// models
const StaffModel = require('../../../models/staff/general')

router.get('/', async (req, res) => {
  const n = await StaffModel.analytic.count()

  const parser = { ...n }

  res.send(parser)
})

router.get('/count', (req, res) => {
  const position = req.query.position || undefined
  if (position) {
    StaffModel.analytic.count(position)
      .then(count => res.send(count))
      .catch(err => res.status(400).send({
        op: false,
        err: String(err)
      }))
  } else {
    StaffModel.analytic.count()
      .then(count => res.send(count))
      .catch(err => res.status(400).send({
        op: false,
        err: String(err)
      }))
  }
})

module.exports = router
