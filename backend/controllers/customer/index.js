const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')
const logout = require('../helpers/logout')

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

router.get('/logout', logout, (req, res) => res.redirect('/login'))

// authen required
router.use(['/', '/edit', '/analytic', '/query'], authen({
  permission: PERMISSION,
  unauthorizedPath: '/customer/login'
}))

router.get('/', (req, res) => {
  res.send('customer jaaa')
})

router.get('/edit', async (req, res) => {
  const id = req.session.passport.user._id
  let user = await CustomerModel.query.id(id)
  if (!user) user = {}
  res.render(path.join(__dirname, '../../views/customer/', 'edit'), { user: user })
})

router.post('/edit', (req, res) => {
  const id = req.session.passport.user._id
  const {
    username, password, name, zipcode,
    address, birthDate, gender, citizenId,
    email, phone, balance
  } = req.body
  const [firstName, lastName] = name.split(' ')
  CustomerModel.edit(id, {
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
  })
    .then(doc => res.send(doc))
    .catch(err => res.send(String(err)))
})

router.use('/analytic', AnalyticController)
router.use('/query', QueryController)

module.exports = router
