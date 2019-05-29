const mongoose = require('mongoose')
const organizationRef = { type: mongoose.Schema.Types.ObjectId, ref: 'organization', required: true }
const serviceTypeRef = { type: mongoose.Schema.Types.ObjectId, ref: 'serviceType', required: true }

const serviceRefTypeSchema = mongoose.Schema({
  name: { type: String, required: true },
  detail: String
})

module.exports = mongoose.model('serviceReference', serviceRefTypeSchema)
