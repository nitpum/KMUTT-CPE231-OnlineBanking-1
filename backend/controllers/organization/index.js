const path = require('path')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

// controllers
const AnalytiicControllers = require('./analytic')
const QueryControllers = require('./query')

// models
const OrganizationModel = require('../../models/organization')

const PERMISSION = {
  default: ['admin'],
  query: ['admin', 'customer', 'manager', 'general'],
  analytic: ['admin', 'manager', 'general']
}

router.use(['/analytic'], authen({ permission: PERMISSION.analytic }))
router.use('/analytic', AnalytiicControllers)

router.use(['/query'], authen({ permission: PERMISSION.query }))
router.use('/query', QueryControllers)

router.use(['/'], authen({ permission: PERMISSION.default }))

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/organization/', 'create.html'))
})

router.post('/create', (req, res) => {
  const data = req.body
  OrganizationModel.create(data)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send({
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

module.exports = router
