const path = require('path')
const express = require('express')
const router = express.Router()

const PERMISSION = {
  default: ['admin'],
  create: ['admin'],
  query: ['admin']
}

// models
const serviceRefModel = require('../../models/servicReference')
const organizationModel = require('../../models/organization')

// controllers
const serviceRefTypeControllers = require('./type')
const QueryControllers = require('./quey')

router.get('/', (req, res) => {
  res.send('service ref jaa')
})

router.get('/create', async (req, res) => {
  const orgs = await organizationModel.query.all()
  const types = await serviceRefModel.serviceType.query.all()
  res.render(path.join(__dirname, '../../views/serviceReference/', 'create'), {
    organizationIds: orgs,
    typeIds: types
  })
})

router.post('/create', (req, res) => {
  const data = req.body
  console.log(req.body)
  serviceRefModel.serviceRef
    .create(data)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.post('/edit', (req, res) => {
  const id = req.body.id
  const data = req.body.data
  serviceRefModel.serviceType.edit({
    id: id,
    data: data
  })
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.post('/delete', (req, res) => {
  const id = req.body.id
  serviceRefModel.serviceType.delete(id)
    .then(res => res.send(res))
    .catch(err => res.status(400).send(String(err)))
})

router.use('/type', serviceRefTypeControllers)
router.use('/query', QueryControllers)

module.exports = router
