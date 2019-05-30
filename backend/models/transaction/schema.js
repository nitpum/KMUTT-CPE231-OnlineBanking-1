const mongoose = require('mongoose')

const staffRef = { type: mongoose.Schema.Types.ObjectId, ref: 'staff' }
const accountIdRef = { type: mongoose.Schema.Types.ObjectId, ref: 'account' }
const machineIdRef = { type: mongoose.Schema.Types.ObjectId, ref: 'machine' }
const chequeIdRef = { type: mongoose.Schema.Types.ObjectId, ref: 'cheque' }
const serviceRef = { type: mongoose.Schema.Types.ObjectId, ref: 'serviceReference', required: true }
const branchRef = { type: mongoose.Schema.Types.ObjectId, ref: 'branch', required: true }

const transactionSchema = mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  type: { type: String, enum: ['TRANSFER', 'RECEIVE', 'WITHDRAW', 'ETC', 'CHEQUE', 'DEPOSIT'], required: true },
  amount: { type: Number, default: 0 },
  balance: Number,
  surrogateName: String,
  staff: staffRef,
  accountId: accountIdRef,
  machineId: machineIdRef,
  chequeId: chequeIdRef,
  ref1: serviceRef,
  ref2: String,
  branch: branchRef
})

module.exports = mongoose.model('transaction', transactionSchema)
