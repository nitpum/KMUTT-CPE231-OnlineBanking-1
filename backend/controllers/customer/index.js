const path = require('path')
const passport = require('passport')
const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')
const logout = require('../helpers/logout')

const PERMISSION = ['customer', 'general', 'manager', 'admin']

// models
const CustomerModel = require('../../models/customer')

// controllers
const AnalyticController = require('./analytic')
const QueryController = require('./query')
const PaymentController = require('./payment')

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
  }).catch(err => res.status(400).send(
    {
      validation: false,
      err: String(err)
    }
  ))
})

router.post('/login', passport.authenticate('customer'), (req, res) => res.sendStatus(200))

router.get('/logout', logout, (req, res) => res.sendStatus(200))

router.get('/login', (req, res) => res.sendFile(path.join(__dirname, '../../views/customer/', 'login.html')))

// authen required
router.use(['/', '/edit', '/analytic', '/query', '/favorite'], authen({
  permission: PERMISSION,
  unauthorizedPath: '/customer/login'
}))

router.get('/', (req, res) => {
  const id = req.session.passport.user._id
  CustomerModel.query.id(id)
    .then(doc => res.send(doc))
})

router.get('/edit', async (req, res) => {
  const id = req.session.passport.user._id
  let user = await CustomerModel.query.id(id)
  if (!user) user = {}
  res.render(path.join(__dirname, '../../views/customer/', 'edit'), { user: user })
})

router.post('/edit', (req, res) => {
  const id = req.body.id
  const {
    username, password, name, zipcode,
    address, birthDate, gender, citizenId,
    email, phone, balance
  } = req.body.data
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
    .catch(err => res.send({
      op: false,
      err: err
    }))
})

router.get('/delete', (req, res) => {
  const id = req.query.id
  if (!id) {
    return res.send({
      op: false,
      err: 'select id'
    })
  }
  CustomerModel.delete(id)
    .then(doc => res.send(doc))
    .catch(err => res.send({
      op: false,
      err: String(err)
    }))
})

router.patch('/me', async (req, res) => {
  const id = req.session.passport.user._id
  let set
  const {
    password, newPassword, newUsername
  } = req.body

  const hashPwd = (await CustomerModel.query.id(id)).password

  if (!await bcrypt.compare(password, hashPwd)) {
    /* incorrect password */
    return res.sendStatus(401)
  }

  if (newUsername) {
    set = { username: newUsername }
  } else if (newPassword) {
    set = { password: newPassword }
  } else {
    return res.sendStatus(400)
  }

  CustomerModel.edit(id, set)
    .then(doc => res.send(doc))
    .catch(err => res.send({
      op: false,
      err: err
    }))
})

router.use('/analytic', AnalyticController)
router.use('/query', QueryController)
router.use('/payment', PaymentController)

module.exports = router
