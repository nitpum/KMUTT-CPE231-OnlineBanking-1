const express = require('express')
const router = express.Router()

// models
const StaffModel = require('../../models/staff')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    StaffModel.query.search(search, limit)
      .then(doc => res.send(doc))
  } else if (id) {
    StaffModel.query.id(id)
      .then(doc => res.send(doc))
  } else {
    StaffModel.query.all(limit)
      .then(doc => {
        res.send(doc)
      })
  }
})

module.exports = router
