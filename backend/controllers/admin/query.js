const express = require('express')
const router = express.Router()

// models
const AdminModel = require('../../models/admin/')
const CustomerModel = require('../../models/customer/')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    AdminModel.query.search(search, limit)
      .then(doc => res.send(doc))
  } else if (id) {
    AdminModel.query.id(id)
      .then(doc => res.send(doc))
  } else {
    AdminModel.query.all(limit)
      .then(doc => {
        res.send(doc)
      })
  }
})

router.get('/overview', async (req, res) => {
  const todayms = new Date().setHours(0, 0, 0, 0)
  const [ activeUser, newUser ] = await Promise.all([
    0,
    CustomerModel.schema.aggregate([
      { $match: {
        dateCreate: { $gte: new Date(todayms) }
      } },
      { $group: { _id: null, count: { $sum: 1 } } }
    ])
  ])
  res.json({
    activeUser,
    newUser: newUser[0].count
  })
})

router.get('/new-user', async (req, res) => {
  const todayms = new Date().setHours(0, 0, 0, 0)
  const newUser = await CustomerModel.schema.aggregate([
    { $match: {
      dateCreate: { $gte: new Date(todayms) }
    } },
    { $project: {
      name: { $concat: ['$name.firstName', ' ', '$name.lastName'] },
      birthDate: 1,
      dateCreate: 1
    } }
  ])
  res.json(newUser.map(({ _id, name, birthDate, dateCreate }) => ({
    id: _id,
    name,
    age: new Date(new Date() - birthDate.getTime()).getUTCFullYear() - 1970,
    dateCreate
  })))
})

router.get('/me', (req, res) => res.json(req.session.passport.user))

module.exports = router
