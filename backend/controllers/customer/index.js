const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

const PERMISSION = ['customer', 'admin']

// models
const CustomerModel = require('../../models/customer')

// controllers
const AnalyticController = require('./analytic')
const QueryController = require('./query')

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/customer/', 'create.html'))
})

router.post('/create', (req, res) => {
  const {
    username, password, name, zipcode,
    address, birthDate, gender, citizenId,
    email, phone, balance
  } = req.body
  const [firstName, lastName] = name.split(' ')

  CustomerModel.create({
    username: username,
    password: password,
    zipcode: zipcode,
    address: address,
    birthDate: birthDate,
    gender: gender,
    citizenId: citizenId,
    email: email,
    phone: phone,
    balance: balance,
    name: {
      firstName: firstName,
      lastName: lastName
    }
  }).then(doc => {
    res.send(doc)
  }).catch(err => res.send(
    {
      validation: false,
      err: String(err)
    }
  ))
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

router.use('/analytic', AnalyticController)
router.use('/query', QueryController)

module.exports = router
