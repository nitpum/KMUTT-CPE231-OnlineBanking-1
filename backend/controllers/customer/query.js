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
      .catch(err => res.send({ op: false, err: String(err) }))
  } else if (id) {
    CustomerModel.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else {
    CustomerModel.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  }
})

router.get('/me', (req, res) => {
  res.json(req.session.passport.user)
})

module.exports = router
