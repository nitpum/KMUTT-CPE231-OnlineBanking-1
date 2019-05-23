const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')

const PERMISSION = 'admin'

// model
const adminModel = require('../../models/admin/index')

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/admin/', 'create.html'))
})

router.post('/create', async (req, res) => {
  try {
    const { username, password, email } = req.body
    console.log(username, password, email)
    const doc = await adminModel.create({
      username: username,
      password: password,
      email: email
    })
    if (doc) res.send(doc)
  } catch (err) {
    if (err) res.send(err)
  }
})

router.post('/login', passport.authenticate(PERMISSION, {
  successRedirect: '/admin',
  failureRedirect: '/admin/login'
}))

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/admin/', 'login.html'))
})

// authen required
router.use(['/'], authen({
  permission: PERMISSION,
  unauthorizedPath: '/admin/login'
}))
router.get('/', (req, res) => {
  res.send('admin jaaa')
})

module.exports = router
