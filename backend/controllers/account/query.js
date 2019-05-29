const express = require('express')
const router = express.Router()

// models
const AccountModel = require('../../models/account/')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined

  if (id) {
    AccountModel.account.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else {
    AccountModel.account.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  }
})

module.exports = router
