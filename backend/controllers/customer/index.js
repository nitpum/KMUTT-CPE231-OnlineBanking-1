const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

const PERMISSION = ['customer']

// models
const CustomerModel = require('../../models/customer')

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/customer/', 'create.html'))
})

router.post('/login', passport.authenticate(PERMISSION, {
  successRedirect: '/customer',
  failureRedirect: '/customer/login'
}))

router.get('/login', (req, res) => res.sendFile(path.join(__dirname, '../../views/customer/', 'login.html')))

// authen required
router.use(['/'], authen({
  permission: PERMISSION,
  unauthorizedPath: '/customer/login'
}))

router.get('/', (req, res) => {
  res.send('customer jaaa')
})

module.exports = router
