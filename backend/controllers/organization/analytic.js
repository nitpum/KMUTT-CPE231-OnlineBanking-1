const express = require('express')
const router = express.Router()

const OrganizationModel = require('../../models/organization')

router.get('/', async (req, res) => {
  const n = await OrganizationModel.analytic.count()
  res.send({
    n: n
  })
})

module.exports = router
