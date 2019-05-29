const express = require('express')
const router = express.Router()

// models
const chequeModel = require('../../models/cheque')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    chequeModel.query.search(search, limit)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  } else if (id) {
    chequeModel.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  } else {
    chequeModel.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  }
})

module.exports = router
