const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

const PERMISSION = ['general', 'admin']

// helpers
const logout = require('../../helpers/logout')
const authen = require('../../helpers/authen')

// models
const BranchModel = require('../../../models/branch')
const StaffModel = require('../../../models/staff/general')

// controllers
const AnalyticControllers = require('./analytic')
const QueryControllers = require('./query')

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../views/staff/general', 'login.html'))
})

router.post('/login', passport.authenticate('staff'), (req, res) => res.sendStatus(200))

router.get('/logout', logout, (req, res) => res.sendStatus(200))

// authen required
router.use(['/'], authen({
  permission: PERMISSION,
  bypassPath: ['/staff/general/create']
}))

router.get('/', (req, res) => {
  const id = req.session.passport.user._id
  StaffModel.query.id(id)
    .then(doc => {
      res.send(doc)
    })
})

router.get('/create', (req, res) => {
  BranchModel.query.all()
    .then(doc => {
      res.render(path.join(__dirname, '../../../views/staff/general', 'create'), {
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
    },
    permission: 'general'
  })
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send({
      validation: false,
      err: String(err)
    }))
})

router.post('/edit', (req, res) => {
  const id = req.body.id
  const data = req.body.data
  StaffModel.edit(id, data)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send({
      op: false,
      err: String(err)
    }))
})

router.use('/analytic', AnalyticControllers)
router.use('/query', QueryControllers)

module.exports = router
