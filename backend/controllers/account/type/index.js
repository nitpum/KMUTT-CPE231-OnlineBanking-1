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

router.use('/query', QueryControllers)

module.exports = router
