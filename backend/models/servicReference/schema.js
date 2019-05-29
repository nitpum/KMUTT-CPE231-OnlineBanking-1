const mongoose = required('mongoose')
const organizationRef = { type: mongoose.Schema.Types.ObjectId, ref: 'organization', required: true }
const serviceTypeRef = { type: mongoose.Schema.Types.ObjectId, ref: 'serviceReferenceType', required: true }

const serviceRefSchema = mongoose.Schema({
  organizationId: organizationRef,
  detail: String,
  fee: { type: Number, default: 0, required: true },
  typeId: serviceTypeRef
})

serviceRefSchema.index({ detail: 'text' })

module.exports = mongoose.model('serviceReference', serviceRefSchema)
