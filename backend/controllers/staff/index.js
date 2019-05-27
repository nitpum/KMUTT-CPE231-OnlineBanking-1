const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')
const logout = require('../helpers/logout')

const PERMISSION = ['staff', 'admin']

// models
const StaffModel = require('../../models/staff')
const BranchModel = require('../../models/branch/')

router.get('/create', (req, res) => {
  BranchModel.query.all()
    .then(doc => {
      res.render(path.join(__dirname, '../../views/staff', 'create'), {
        branches: doc
      })
    }).catch(err => res.send(err))
})

router.post('/create', (req, res) => {
  const {
    username, password, name, zipcode,
    address, birthDate, gender, citizenId,
    position, branch, email, phone
  } = req.body
  const [firstName, lastName] = name.split(' ')

  StaffModel.create({
    username: username,
    password: password,
    zipcode: zipcode,
    address: address,
    birthDate: birthDate,
    gender: gender,
    citizenId: citizenId,
    position: position,
    branch: branch,
    email: email,
    phone: phone,
    name: {
      firstName: firstName,
      lastName: lastName
    }
  })
    .then(doc => res.send(doc))
    .catch(err => res.send({
      validation: false,
      err: String(err)
    }))
})

router.post('/login', passport.authenticate(PERMISSION), (req, res) => res.sendStatus(200))

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/staff/', 'login.html'))
})

router.get('/logout', logout, (req, res) => res.sendStatus(200))

// authen required
router.use(['/', '/query', 'analytic'], authen({
  permission: PERMISSION,
  unauthorizedPath: '/staff/login'
}))
router.get('/', (req, res) => {
  res.send('staff jaaa')
})

router.get('/query', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    StaffModel.query.search(search, limit)
      .then(doc => res.send(doc))
  } else if (id) {
    StaffModel.query.id(id)
      .then(doc => res.send(doc))
  } else {
    StaffModel.query.all(limit)
      .then(doc => {
        res.send(doc)
      })
  }
})

router.get('/analytic', (req, res) => {
  StaffModel.analytic.count().then(n => res.send(n))
})

module.exports = router
