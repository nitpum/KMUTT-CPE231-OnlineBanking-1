const mongoose = require('mongoose')

const serviceRefTypeSchema = mongoose.Schema({
  name: { type: String, required: true },
  detail: String
})

serviceRefTypeSchema.index({ name: 'text' })

module.exports = mongoose.model('serviceReference', serviceRefTypeSchema)
