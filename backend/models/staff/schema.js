const mongoose = require('mongoose')
const branchRef = { type: mongoose.Schema.Types.ObjectId, red: 'branch' }

const staffSchema = mongoose.Schema({
  username: String,
  password: String,
  name: {
    firstName: String,
    lastName: String
  },
  zipcode: { type: String, maxlength: 5 },
  address: String,
  birthDate: Date,
  gender: { type: String, enum: ['M', 'F', 'U'] },
  citizenId: { type: String, maxlength: 13 },
  position: String,
  branch: branchRef
})

staffSchema.index({ 'name.firstName': 'text',
  'name.lastName': 'text' })

module.exports = mongoose.model('staff', staffSchema)
