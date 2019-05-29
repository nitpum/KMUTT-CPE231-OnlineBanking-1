const mongoose = require('mongoose')

const customerRef = { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true }

const notificationSchema = mongoose.Schema({
  customerId: customerRef,
  detail: String,
  type: { type: String, enum: ['ALERT', 'WARN', 'INFO', 'ETC'], default: 'INFO' },
  date: Date,
  read: Boolean
})

module.exports = mongoose.model('notification', notificationSchema)
