const mongoose = require('mongoose')
const customerRef = { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true }
const typeRef = { type: mongoose.Schema.Types.ObjectId, ref: 'accountType', required: true }
const branchRef = { type: mongoose.Schema.Types.ObjectId, ref: 'branch', required: true }

const accountSchema = mongoose.Schema({
  accountId: { type: String, required: true },
  customerId: customerRef,
  accountType: typeRef,
  branchId: branchRef,
  balance: { type: Number, default: 0 },
  status: { type: String, enum: ['ACTIVE', 'LOCK', 'ETC', 'REVOKE'], required: true }
})

accountSchema.index({ '$**': 'text' })

module.exports = mongoose.model('account', accountSchema)
