const express = require('express')
const router = express.Router()

// models
const cardModel = require('../../models/card')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined

  if (id) {
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
