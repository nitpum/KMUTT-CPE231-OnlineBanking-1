const express = require('express')
const moment = require('moment')
const router = express.Router()

// models
const chequeModel = require('../../models/cheque')

router.get('/', (req, res) => {
  const id = req.query.id || undefined
  const limit = Number(req.query.limit) || undefined
  const search = req.query.search || undefined

  if (search) {
    chequeModel.query.search(search, limit)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  } else if (id) {
    chequeModel.query.id(id)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  } else {
    chequeModel.query.all(limit)
      .then(doc => res.send(doc))
      .catch(err => res.status(400).send(String(err)))
  }
})

router.get('/overview', async (req, res) => {
  const thisMonth = moment().month(new Date().getMonth())
  const start = thisMonth.startOf('month').toDate()
  const end = thisMonth.endOf('month').toDate()

  const cheques = await chequeModel.schema.find({
    $and: [
      { created: { $gte: start } },
      { created: { $lte: end } }
    ]
  })
  res.json({
    total: cheques.reduce((acc, { amount }) => acc + amount, 0),
    min: Math.min(...cheques.map(({ amount }) => amount)),
    max: Math.max(...cheques.map(({ amount }) => amount)),
    avg: cheques.reduce((acc, { amount }) => acc + amount, 0) / cheques.length
  })
})

module.exports = router
