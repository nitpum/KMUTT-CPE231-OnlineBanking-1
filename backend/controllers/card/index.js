const express = require('express')
const router = express.Router()

// controllers
const QueryControllers = require('./query')

// models
const cardModel = require('../../models/card')

router.get('/', (req, res) => {
  res.send('card jaa')
})

router.post('/create', (req, res) => {
  const data = req.body
  cardModel
    .create(data)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.post('/edit', (req, res) => {
  const id = req.body.id
  cardModel.edit(id)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.post('/delete', (req, res) => {
  const id = req.body.id
  cardModel.delete(id)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.use('/query', QueryControllers)

module.exports = router
