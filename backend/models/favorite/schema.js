const mongoose = require('mongoose')

const customerRef = { type: mongoose.Schema.Types.ObjectId, ref: 'customer' }

const favoriteSchema = mongoose.Schema({
  customerId: customerRef,
  ref1: { type: String, maxlength: 15 },
  ref2: { type: String, maxlength: 15 },
  name: { type: String, maxlength: 40 }
})

favoriteSchema.index({ '$**': 'text' })

module.exports = mongoose.model('favorite', favoriteSchema)
