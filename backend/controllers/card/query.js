const express = require('express')
const router = express.Router()

// models
const cardModel = require('../../models/card')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = Number(req.query.search) || undefined

  if (search) {
    cardModel.query.search(search)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  } else if (id) {
    cardModel.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  } else {
    cardModel.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  }
})

module.exports = router
