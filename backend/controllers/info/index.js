const express = require('express')
const router = express.Router()

const init = require('../../configs/init')

// models
const serviceRefModel = require('../../models/servicReference')
const orgModel = require('../../models/organization')

router.get('/', async (req, res) => {
  const serReftype = await serviceRefModel.serviceType.schema.findOne({ name: init.serviceReferenceType.name })
  const serviceRef = await serviceRefModel.serviceRef.schema.findOne({ detail: init.serviceReference.detail })
  const org = await orgModel.schema.findOne({ name: init.organization.name })
  res.send({
    organization: org,
    serviceReferenceType: serReftype,
    serviceReference: serviceRef
  })
})

module.exports = router
