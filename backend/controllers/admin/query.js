const express = require('express')
const router = express.Router()

// models
const AdminModel = require('../../models/admin/')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    AdminModel.query.search(search, limit)
      .then(doc => res.send(doc))
  } else if (id) {
    AdminModel.query.id(id)
      .then(doc => res.send(doc))
  } else {
    AdminModel.query.all(limit)
      .then(doc => {
        res.send(doc)
      })
  }
})

router.get('/me', (req, res) => res.json(req.session.passport.user))

module.exports = router
