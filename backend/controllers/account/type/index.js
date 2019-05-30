const path = require('path')
const express = require('express')
const router = express.Router()

// modeles
const AccountModel = require('../../../models/account')
const BranchModel = require('../../../models/branch')

// controllers
const QueryControllers = require('./query')

router.get('/', (req, res) => {
  res.send('bank type jaaa')
})

router.get('/create', (req, res) => {
  res.render(path.join(__dirname, '../../../views/account/type', 'create'))
})

router.post('/create', (req, res) => {
  const data = req.body
  AccountModel.type.create(data)
    .then(doc => res.send(doc))
    .catch(err => res.send({
      op: false,
      err: String(err)
    }))
})

router.post('/edit', (req, res) => {
  const id = req.body.id
  const data = req.body.data
  AccountModel.type.edit(id, data)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send({
      op: false,
      err: String(err)
    }))
})

router.delete('/', (req, res) => {
  const id = req.body.id
  AccountModel.type.delete(id)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send({
      op: false,
      err: String(err)
    }))
})

router.use('/query', QueryControllers)

module.exports = router
