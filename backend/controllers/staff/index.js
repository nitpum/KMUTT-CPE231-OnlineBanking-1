const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')
const logout = require('../helpers/logout')

const PERMISSION = ['staff', 'admin', 'manager', 'general']

// models
const StaffModel = require('../../models/staff')
const BranchModel = require('../../models/branch/')

// controllers
const QueryControllers = require('./query')
const AnalyticControllers = require('./analytic')
const GenralControllers = require('./general')
const ManagerControllers = require('./manager')

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

<<<<<<< HEAD
router.post('/login', passport.authenticate(PERMISSION), (req, res) => res.sendStatus(200))
=======
router.post('/login', passport.authenticate('staff'), (req, res) => res.sendStatus(200))

router.get('/logout', logout, (req, res) => res.sendStatus(200))
>>>>>>> backend

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/staff/', 'login.html'))
})

<<<<<<< HEAD
router.get('/logout', logout, (req, res) => res.sendStatus(200))

=======
>>>>>>> backend
// authen required
router.use(['/', '/query', 'analytic'], authen({
  permission: PERMISSION,
  unauthorizedPath: '/staff/login'
}))
router.get('/', (req, res) => {
  res.send('staff jaaa')
})

router.use('/query', QueryControllers)
router.use('/analytic', AnalyticControllers)

// general staff
router.use(['/general'], authen({
  permission: ['general', 'admin'],
  unauthorizedPath: '/staff/general/login'
}))
router.use('/general', GenralControllers)

// manager staff
router.use(['/manager'], authen({
  permission: ['manager', 'admin'],
  unauthorizedPath: '/staff/manager/login'
}))
router.use('/manager', ManagerControllers)

module.exports = router
