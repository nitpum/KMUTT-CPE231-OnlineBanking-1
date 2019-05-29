const path = require('path')
const express = require('express')
const router = express.Router()

// models
const staffModel = require('../../models/staff')
// const accountModel = require('../../models/account')

const PERMISSION = {
  default: ['admin', 'general', 'manager', 'customer'],
  query: ['admin', 'general', 'manager', 'customer'],
  analytic: ['admin', 'general', 'manager'],
  create: ['general', 'manager'],
  edit: ['general', 'manager'],
  delete: ['general', 'manager']
}

router.get('/', async (req, res) => {
  const staffs = await staffModel.general.query.all()
  res.render(path.join(__dirname, '../../views/transaction', 'index'),
    { staffs: staffs }
  )
})

router.post('/', (req, res) => {
  res.send(req.body)
})

module.exports = router
