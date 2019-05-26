const mongoose = require('mongoose')
const favoriteRef = { type: mongoose.Schema.Types.ObjectId, ref: 'favorite' }
const notifyRef = { type: mongoose.Schema.Types.ObjectId, ref: 'favorite' }
const accRef = { type: mongoose.Schema.Types.ObjectId, ref: 'account' }

const customerSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  },
  email: { type: String, required: true },
  zipcode: { type: String, maxlength: 5 },
  address: String,
  birthDate: Date,
  gender: { type: String, enum: ['M', 'F', 'U'], required: true },
  citizenId: { type: String, maxlength: 13, required: true },
  phone: { type: String, maxlength: 13, required: true },
  lastAccess: Date,
  status: { type: String, enum: ['ACTIVE', 'LOCKED', 'TOKEN', 'RESETPASS', 'ETC'], default: 'ACTIVE' },
  favorite: [favoriteRef],
  notifications: [notifyRef],
  account: [accRef],
  balance: { type: Number, default: 0 },

  dateCreate: { type: Date, default: Date.now }
})

customerSchema.index({ '$**': 'text' })

module.exports = mongoose.model('customer', customerSchema)
