const mongoose = require('mongoose')

const accountRef = { type: mongoose.Schema.Types.ObjectId, ref: 'account', required: true }

const cardSchema = mongoose.Schema({
  accountId: accountRef,
  holder: String,
  expired: { type: Date, required: true },
  cvv: { type: String, maxlength: 3 },
  pin: String,
  paymentDate: { type: Date, required: true },
  isOnline: Boolean
})

module.exports = mongoose.model('card', cardSchema)
