const mongoose = require('mongoose')

const organizationSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['BANK', 'COMPANY', 'ETC'], required: true },
  bankSwift: String,
  bankAccount: String
})

module.exports = mongoose.model('organization', organizationSchema)
