const path = require('path')
const express = require('express')
const router = express.Router()

// models
const serviceRefModel = require('../../../models/servicReference')

router.get('/', (req, res) => {
  res.send('service type jaa')
})

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../views/serviceReference/type/', 'create.html'))
})

router.post('/create', (req, res) => {
  const data = req.body
  serviceRefModel.serviceType
    .create(data)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.post('/edit', (req, res) => {
  const id = req.body.id
  const data = req.body.data
  serviceRefModel.serviceType.edit({
    id: id,
    data: data
  })
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.post('/delete', (req, res) => {
  const id = req.body.id
  serviceRefModel.serviceType.delete(id)
    .then(res => res.send(res))
    .catch(err => res.status(400).send(String(err)))
})

module.exports = router
