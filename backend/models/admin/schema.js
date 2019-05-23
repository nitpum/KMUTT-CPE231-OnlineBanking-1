const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
  username: { type: String, index: true },
  password: String,
  email: String,
  permission: String,
  dateCreate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('admin', adminSchema)
