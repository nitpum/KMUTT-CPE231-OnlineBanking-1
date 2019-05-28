const path = require('path')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

// controllers
const AnalytiicControllers = require('./analytic')

// models
const OrganizationModel = require('../../models/organization')

const PERMISSION = {
  default: ['admin', 'customer', 'manager', 'general'],
  query: ['admin', 'customer', 'manager', 'general'],
  analytic: ['admin', 'manager', 'general']
}

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/organization/', 'create.html'))
})

router.post('/create', (req, res) => {
  const data = req.body
  OrganizationModel.create(data)
    .then(doc => res.send(doc))
    .catch(err => res.send({
      op: false,
      err: String(err)
    }))
})

router.post('/edit', (req, res) => {
  const id = req.body.id
  const data = req.body.data
  OrganizationModel.edit(id, data)
    .then(doc => res.send(doc))
    .catch(err => res.send({
      op: false,
      err: String(err)
    }))
})

router.use('/analytic', AnalytiicControllers)

module.exports = router
