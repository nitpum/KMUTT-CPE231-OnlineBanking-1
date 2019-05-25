const StaffSchema = require('./schema')

const passwordHelpers = require('../helpers/password-hash')
const loginHelpers = require('../helpers/user-login')

const validation = (data) => new Promise(async (resolve, reject) => {
  try {
    const [username, citizenId, email] = await Promise.all([
      StaffSchema.findOne({ username: data.username }),
      StaffSchema.findOne({ citizenId: data.citizenId }),
      StaffSchema.findOne({ email: data.email })
    ])
    if (!username && !citizenId && !email) resolve(true)
    resolve(false)
  } catch (err) {
    reject(err)
  }
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
    citizenId, position, branch, email
  } = data
  const { firstName, lastName } = name
  const valid = await validation({
    username: username,
    citizenId: citizenId
  })
  if (!valid) reject(Error('username or citizendId or email duplicated'))
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
    branch: branch,
    email: email
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
