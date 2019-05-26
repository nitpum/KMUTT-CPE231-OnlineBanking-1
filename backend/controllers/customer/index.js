const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

const PERMISSION = ['customer']

// models
const CustomerModel = require('../../models/customer')

router.get('/', (req, res) => {
  res.send('customer jaaa')
})

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/customer/', 'create.html'))
})

module.exports = router
