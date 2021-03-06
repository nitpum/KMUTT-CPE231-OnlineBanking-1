const path = require('path')
const express = require('express')
const router = express.Router()

const PERMISSION = {
  default: ['admin', 'general', 'manager', 'customer'],
  query: ['admin', 'general', 'manager', 'customer'],
  analytic: ['admin', 'general', 'manager'],
  create: ['general'],
  edit: ['general'],
  delete: ['general']
}

// helpers
const authen = require('../helpers/authen')

// models
const AccountModel = require('../../models/account')
const BranchModel = require('../../models/branch')
const StaffModel = require('../../models/staff')

// controllers
const QueryController = require('./query')
const typeController = require('./type')
const TransactionControllers = require('./transaction')

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

router.get('/create/data', authen({ permission: PERMISSION.create }),
  async (req, res) => {
    const [ staff, types ] = await Promise.all([
      StaffModel.query.id(req.session.passport.user._id),
      AccountModel.type.query.all()
    ])

    const branch = await BranchModel.query.id(staff.branch)

    res.json({
      branch, types
    })
  }
)

router.post('/create', authen({ permission: PERMISSION.create }),
  (req, res) => {
    const data = req.body
    AccountModel.account.create(data)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  })

router.post('/edit', (req, res) => {
  const id = req.body.id
  const data = req.body.data
  AccountModel.account.edit(id, data)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(String(err)))
})

router.get('/', (req, res) => {
  res.send('account bank jaaa')
})

router.use('/query', QueryController)
router.use('/type', typeController)
router.use('/transaction', TransactionControllers)

module.exports = router
