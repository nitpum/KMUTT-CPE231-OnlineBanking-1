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
  async (req, res) => {
    res.send(req.body)
  })

router.get('/', (req, res) => {
  res.send('account bank jaaa')
})

router.use('/type', typeController)

module.exports = router
