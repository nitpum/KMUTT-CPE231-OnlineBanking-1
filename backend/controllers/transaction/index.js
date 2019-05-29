const path = require('path')
const express = require('express')
const router = express.Router()

// models

const PERMISSION = {
  default: ['admin', 'general', 'manager', 'customer'],
  query: ['admin', 'general', 'manager', 'customer'],
  analytic: ['admin', 'general', 'manager'],
  create: ['general', 'manager'],
  edit: ['general', 'manager'],
  delete: ['general', 'manager']
}

router.get('/', (req, res) => {
  res.send('transaction jaaa')
})

module.exports = router
