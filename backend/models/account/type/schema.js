const mongoose = require('mongoose')

const accTypeSchema = mongoose.Schema({
  name: { type: String, required: true },
  fee: { type: Number, default: 0 }, // cash
  interestMRound: { type: Number, default: 12 }, // months
  interest: { type: Number, default: 1 }, // percent
  DepositRound: { type: Number, default: 0 }, // months
  minDeposit: { type: Number, default: 0 }, // cash
  interestMin: { type: Number, default: 1 } // percent
})

module.exports = mongoose.model('accountType', accTypeSchema)
