const express = require('express')
const router = express.Router()

// models
const AccountModel = require('../../../models/account')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    AccountModel.type.query.search(search, limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else if (id) {
    AccountModel.type.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else {
    AccountModel.type.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  }
})

module.exports = router
