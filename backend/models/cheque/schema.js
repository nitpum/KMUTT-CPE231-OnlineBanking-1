const mongoose = require('mongoose')

const organizationRef = { type: mongoose.Schema.Types.ObjectId, ref: 'organization', required: true }
const accRef = { type: mongoose.Schema.Types.ObjectId, ref: 'account' }

const chequeSchema = mongoose.Schema({
  chequeId: { type: String },
  byOrganizationId: organizationRef,
  accountId: accRef,
  accountNo: String,
  amount: { type: Number, default: 0 },
  payee: String,
  type: { type: String, enum: ['CASH', 'ORDER', 'ETC'] },
  status: { type: String, enum: ['ACTIVE', 'REJECT', 'ETC', 'PAY'] },
  drawee: { type: String, required: true },
  created: { type: Date, default: Date.now },
  drawDate: { type: Date, required: true }
})

chequeSchema.index({ '$**': 'text' })

module.exports = mongoose.model('cheque', chequeSchema)
