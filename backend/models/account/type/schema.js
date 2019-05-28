const mongoose = require('mongoose')

const accTypeSchema = mongoose.Schema({
  name: { type: String, required: true },
  fee: { type: Number, default: 0 },
  interestMRound: { type: Number, default: 12 },
  interest: { type: Number, default: 1 },
  DepositRound: Number,
  minDeposit: Number,
  interestMin: Number
})

module.exports = mongoose.model('accountType', accTypeSchema)
