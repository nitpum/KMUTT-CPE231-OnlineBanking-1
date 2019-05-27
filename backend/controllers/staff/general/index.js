const path = require('path')
const express = require('express')
const router = express.Router()

// models
const BranchModel = require('../../../models/branch')
const StaffModel = require('../../../models/staff/general')

// controllers
const AnalyticControllers = require('./analytic')

router.get('/', (req, res) => res.send('general staff jaa'))

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
    }
  })
    .then(doc => res.send(doc))
    .catch(err => res.send({
      validation: false,
      err: String(err)
    }))
})

router.use('/analytic', AnalyticControllers)

module.exports = router
