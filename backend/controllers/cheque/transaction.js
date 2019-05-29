const express = require('express')
const router = express.Router()

// models
const chequeModel = require('../../models/cheque')
const accountModel = require('../../models/account')

router.post('/cashup', async (req, res) => {
  const id = req.body.id
  const validCheque = await chequeModel.transaction.valid(id)
  console.log(validCheque)
})

module.exports = router
