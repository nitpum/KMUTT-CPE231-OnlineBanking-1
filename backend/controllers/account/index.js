const path = require('path')
const express = require('express')
const router = express.Router()

const PERMISSION = {
  default: ['admin', 'general', 'manager', 'customer'],
  query: ['admin', 'general', 'manager', 'customer'],
  analytic: ['admin', 'general', 'manager'],
  create: ['general', 'manager'],
  edit: ['general', 'manager'],
  delete: ['general', 'manager']
}

// helpers
const authen = require('../helpers/authen')

// models
const AccountModel = require('../../models/account')
const BranchModel = require('../../models/branch')

// controllers
const QueryController = require('./query')
const typeController = require('./type')

router.get('/create', authen({ permission: PERMISSION.create }),
  async (req, res) => {
    const branchs = await BranchModel.query.all()
    const types = await AccountModel.type.query.all()
    const accId = await AccountModel.account.genId()

    res.render(path.join(__dirname, '../../views/account/', 'create'), {
      types: types,
      accountId: accId,
      branchs: branchs
    })
  })

router.post('/create', authen({ permission: PERMISSION.default }),
  (req, res) => {
    const data = req.body
    AccountModel.account.create(data)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  })

router.get('/', (req, res) => {
  res.send('account bank jaaa')
})

router.use('/query', QueryController)
router.use('/type', typeController)

module.exports = router
