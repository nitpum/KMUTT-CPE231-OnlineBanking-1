const path = require('path')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

const OrganizationModel = require('../../models/organization')

const PERMISSION = {
  default: ['admin', 'customer', 'manager', 'general'],
  query: ['admin', 'customer', 'manager', 'general'],
  analytic: ['admin', 'manager', 'general']
}

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/organization/', 'create.html'))
})

router.post('/create', (req, res) => {
  res.send(req.body)
})

module.exports = router
