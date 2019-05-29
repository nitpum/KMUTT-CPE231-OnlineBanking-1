const mongoose = require('mongoose')

const organizationRef = { type: mongoose.Schema.Types.ObjectId, ref: 'organization' }
const accRef = { type: mongoose.Schema.Types.ObjectId, ref: 'account' }

const chequeSchema = mongoose.Schema({
  chequeId: { type: String },
  byOrganizationId: organizationRef,
  accountId: accRef,
  accountNo: String,
  amount: { type: Number, default: 0 },
  payFor: String,
  type: { type: String, enum: ['CHASH', 'ORDER', 'ETC'] },
  status: { type: String, enum: ['ACTIVE', 'REJECT', 'ETC'] },
  drawee: { type: String, required: true },
  created: { type: Date, default: Date.now },
  drawDate: { type: Date, required: true }
})

chequeSchema.index({ '$**': 'text' })

module.exports = mongoose.model('cheque', chequeSchema)
