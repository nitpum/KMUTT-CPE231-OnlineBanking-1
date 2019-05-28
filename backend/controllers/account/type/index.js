const path = require('path')
const express = require('express')
const router = express.Router()

// modeles
const AccountModel = require('../../../models/account')
const BranchModel = require('../../../models/branch')

router.get('/', (req, res) => {
  res.send('bank type jaaa')
})

router.get('/create', async (req, res) => {
  const branchs = await BranchModel.query.all()
  const types = await AccountModel.type.query.all()
  const accId = await AccountModel.account.genId()
  res.render(path.join(__dirname, '../../../views/account/type', 'create'), {
    types: types,
    accountId: accId,
    branchs: branchs
  })
})

module.exports = router
