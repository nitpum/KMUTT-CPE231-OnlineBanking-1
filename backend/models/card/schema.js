const mongoose = require('mongoose')

const accountRef = { type: mongoose.Schema.Types.ObjectId, ref: 'account', required: true }

const cardSchema = mongoose.Schema({
  accountId: accountRef,
  cardId: { type: String, maxlength: 16 },
  holder: String,
  expired: { type: Date, required: true },
  cvv: { type: String, maxlength: 3 },
  pin: { type: String, maxlength: 6 },
  paymentDate: { type: Date, required: true }
  // isOnline: Boolean
})

module.exports = mongoose.model('card', cardSchema)
