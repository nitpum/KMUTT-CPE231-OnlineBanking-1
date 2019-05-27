const path = require('path')
const express = require('express')
const router = express.Router()

// models
const BranchModel = require('../../../models/branch')
const StaffModel = require('../../../models/staff/manager')

// controllers
const AnalyticControllers = require('./analytic')
const QueryControllers = require('./query')

router.get('/', (req, res) => res.send('manager staff jaa'))

router.get('/create', (req, res) => {
  BranchModel.query.all()
    .then(doc => {
      res.render(path.join(__dirname, '../../../views/staff/manager', 'create'), {
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

router.use('/analytic', AnalyticControllers)
router.use('/query', QueryControllers)

module.exports = router
