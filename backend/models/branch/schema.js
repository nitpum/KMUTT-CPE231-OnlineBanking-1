const mongoose = require('mongoose')

const branchSchema = mongoose.Schema({
  name: String,
  address: String,
  zipcode: String,
  balance: { type: Number, default: 0 },
  dateCreate: { type: Date, default: Date.now }
})

branchSchema.index({ name: 'text', address: 'text' })
module.exports = mongoose.model('branch', branchSchema)
