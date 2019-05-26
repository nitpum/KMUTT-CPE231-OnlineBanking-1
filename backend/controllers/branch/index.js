const path = require('path')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

const PERMISSION = ['admin']

// models
const BranchModel = require('../../models/branch/index')
// const BranchSchema = BranchModel.schema

// authen required
router.use(['/'], authen({
  permission: PERMISSION,
  unauthorizedPath: '/admin/login'
}))
router.get('/', (req, res) => {
  res.send('branch jaaa')
})

router.get('/create', async (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/branch/', 'create.html'))
})

router.post('/create', (req, res) => {
  const { name, address, zipcode, balance } = req.body
  BranchModel.create({
    name: name,
    address: address,
    zipcode: zipcode,
    balance: balance
  })
    .then(doc => res.send(doc))
    .catch(err => res.send({
      validation: false,
      err: String(err)
    }))
})

router.get('/query', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined
  if (search) {
    BranchModel.query.search(search, limit)
      .then(doc => res.send(doc))
  } else if (id) {
    BranchModel.query.id(id)
      .then(doc => res.send(doc))
  } else {
    BranchModel.query.all(limit)
      .then(doc => {
        res.send(doc)
      })
  }
})

router.get('/analytic', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  let listBranchId
  if (req.query.listBranchId) {
    listBranchId = String(req.query.listBranchId).split(',')
  } else {
    listBranchId = undefined
  }

  if (listBranchId) {
    BranchModel.analytic.balance.idList(listBranchId)
      .then(doc => res.send(doc))
      .catch(err => res.send(err))
  } else {
    BranchModel.analytic.balance.all(limit).then(doc => {
      res.send(doc)
    })
  }
})

module.exports = router
