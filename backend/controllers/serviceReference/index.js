const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

const PERMISSION = {
  default: ['admin'],
  create: ['admin'],
  query: ['admin']
}

// models
const serviceReferenceModel = require('../../models/servicReference')

router.get('/', (req, res) => {
  res.send('service ref jaa')
})

module.exports = router
