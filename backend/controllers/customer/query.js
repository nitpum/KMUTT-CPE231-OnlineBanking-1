const express = require('express')
const router = express.Router()

// models
const CustomerModel = require('../../models/customer/')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    CustomerModel.query.search(search, limit)
      .then(doc => res.send(doc))
  } else if (id) {
    CustomerModel.query.id(id)
      .then(doc => res.send(doc))
  } else {
    CustomerModel.query.all(limit)
      .then(doc => {
        res.send(doc)
      })
  }
})

module.exports = router
