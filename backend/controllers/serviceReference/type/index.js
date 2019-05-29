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

module.exports = router
