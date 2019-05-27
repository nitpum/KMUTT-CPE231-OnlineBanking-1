const mongoose = require('mongoose')
const branchRef = { type: mongoose.Schema.Types.ObjectId, ref: 'branch' }

const staffSchema = mongoose.Schema({
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
  phone: { type: String, maxlength: 13, required: true },
  gender: { type: String, enum: ['M', 'F', 'U'], required: true },
  citizenId: { type: String, maxlength: 13, required: true },
  permission: { type: String, required: true },
  position: { type: String, required: true },
  branch: branchRef,
  dateCreate: { type: Date, default: Date.now }
})

staffSchema.index({ 'name.firstName': 'text',
  'name.lastName': 'text' })

module.exports = mongoose.model('staff', staffSchema)
