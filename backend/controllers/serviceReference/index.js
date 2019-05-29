const path = require('path')
const express = require('express')
const router = express.Router()

const PERMISSION = {
  default: ['admin'],
  create: ['admin'],
  query: ['admin']
}

// models
const serviceReferenceModel = require('../../models/servicReference')

// controllers
const serviceRefTypeControllers = require('./type')
const QueryControllers = require('./quey')

router.get('/', (req, res) => {
  res.send('service ref jaa')
})

router.use('/type', serviceRefTypeControllers)
router.use('/query', QueryControllers)

module.exports = router
