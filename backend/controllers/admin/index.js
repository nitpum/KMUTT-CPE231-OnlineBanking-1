const path = require('path')
const passport = require('passport')
const express = require('express')
const router = express.Router()

// helpers
const authen = require('../helpers/authen')
const logout = require('../helpers/logout')

const PERMISSION = ['admin']

// model
const AdminModel = require('../../models/admin')

// controllers
const QueryController = require('./query')

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/admin/', 'create.html'))
})

router.post('/create', (req, res) => {
  const { username, password, email } = req.body
  console.log(username, password, email)
  AdminModel.create({
    username: username,
    password: password,
    email: email
  }).then(doc => {
    res.send(doc)
  }).catch(err => res.send({
    validation: false,
    err: String(err)
  }))
})

router.post('/login', passport.authenticate(PERMISSION, {
  successRedirect: '/admin',
  failureRedirect: '/admin/login'
}))

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/admin/', 'login.html'))
})

router.get('/logout', logout, (req, res) => res.redirect('/admin/login'))

// authen required
router.use(['/', '/edit', '/query'], authen({
  permission: PERMISSION,
  unauthorizedPath: '/admin/login'
}))

router.get('/', (req, res) => {
  res.send('admin jaaa')
})

router.get('/edit', async (req, res) => {
  const id = req.session.passport.user._id
  let user = await AdminModel.query.id(id)
  if (!user) user = {}
  res.render(path.join(__dirname, '../../views/admin/', 'edit'), { user: user })
})

router.post('/edit', (req, res) => {
  const id = req.session.passport.user._id
  const { username, password, email } = req.body
  AdminModel.edit(id, {
    username: username,
    password: password,
    email: email
  })
    .then(doc => res.send(doc))
    .catch(err => res.send({
      op: false,
      err: String(err)
    }))
})

router.get('/delete', (req, res) => {
  const id = req.query.id
  if (!id) {
    return res.send({
      op: false,
      err: 'select id'
    })
  }
  AdminModel.delete(id)
    .then(doc => res.send(doc))
    .catch(err => res.send({
      op: false,
      err: String(err)
    }))
})

router.use('/query', QueryController)

module.exports = router
