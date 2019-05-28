const mongoose = require('mongoose')
const customerRef = { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true }
const typeRef = { type: mongoose.Schema.Types.ObjectId, ref: 'accountType', required: true }
const branchRef = { type: mongoose.Schema.Types.ObjectId, ref: 'branch', required: true }

const accountSchema = mongoose.Schema({
  accountId: { type: String, required: true },
  customer: customerRef,
  accountType: typeRef,
  branch: branchRef,
  status: { type: String, enum: ['ACTIVE', 'LOCK', 'ETC'], required: true }
})

module.exports = mongoose.model('account', accountSchema)
