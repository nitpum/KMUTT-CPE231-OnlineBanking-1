const express = require('express')
const router = express.Router()

// models
const ServiceRefModel = require('../../models/servicReference')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    ServiceRefModel.serviceRef.query.search(search, limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else if (id) {
    ServiceRefModel.serviceRef.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  } else {
    ServiceRefModel.serviceRef.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.send({ op: false, err: String(err) }))
  }
})

module.exports = router
