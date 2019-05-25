const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

const PERMISSION = ['staff']

// models
const StaffModel = require('../../models/staff')

router.get('/create', (req, res) => {
  res.send('create staff jaa')
})




module.exports = router