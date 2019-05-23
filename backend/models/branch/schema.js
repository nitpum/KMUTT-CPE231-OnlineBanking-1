const mongoose = require('mongoose')

const branchSchema = mongoose.Schema({
  name: String,
  address: String,
  zipcode: String,
  balance: Number,
  dateCreate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('branch', branchSchema)
