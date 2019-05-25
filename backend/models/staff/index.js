const StaffSchema = require('./schema')

const passwordHelpers = require('../helpers/password-hash')
const loginHelpers = require('../helpers/user-login')

const validation = (username) => new Promise((resolve, reject) => {
  StaffSchema.findOne({ username: username }, (err, doc) => {
    if (err) reject(err)
    if (doc) resolve(false)
    else resolve(true)
  })
})

/**
 * create staff user
 * @param  {Object} data
 * @param  {String} data.username - username
 * @param  {String} data.password - password
 * @param  {String} data.email - email
 * @param  {String} data.name.firstName - firstname
 * @param  {String} data.name.lastName - firstname
 * @param  {String} data.zipcode - zipcode
 * @param  {String} data.address - address
 * @param  {Date} data.birthDate - birthdate
 * @param  {String} data.gender - ['M', 'F', 'U']
 * @param  {String} data.citizenId - citizenId
 * @param  {String} data.position - position
 * @param  {String} data.branch - branch that staff assigned
 * @returns {Object} - mongodb document
 */
const create = (data) => new Promise(async (resolve, reject) => {
  const {
    username, password, name, zipcode,
    address, birthDate, gender,
    citizenId, position, branch
  } = data
  const { firstName, lastName } = name
  const userValid = await validation(username)
  if (!userValid) reject(Error('username duplicated'))
  const hash = await passwordHelpers.generate(password)

  const doc = new StaffSchema({
    username: username,
    password: hash,
    'name.firstName': firstName,
    'name.lastName': lastName,
    zipcode: zipcode,
    address: address,
    birthDate: birthDate,
    gender: gender,
    citizenId: citizenId,
    position: position,
    branch: branch
  })

  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

module.exports = {
  create: create,
  schema: StaffSchema

}
