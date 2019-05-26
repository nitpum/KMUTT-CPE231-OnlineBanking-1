const CustomerSchema = require('./schema')

// helpers
const passwordHelpers = require('../helpers/password-hash')
const loginHelpers = require('../helpers/user-login')

const validation = (data) => new Promise(async (resolve, reject) => {
  try {
    const [username, citizenId, email] = await Promise.all([
      CustomerSchema.findOne({ username: data.username }),
      CustomerSchema.findOne({ citizenId: data.citizenId }),
      CustomerSchema.findOne({ email: data.email })
    ])
    if (!username && !citizenId && !email) resolve(true)
    resolve(false)
  } catch (err) {
    reject(err)
  }
})

/**
  * create customer user
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
 * @param  {String} data.phone - phone
 * @returns {Object} - mongodb document
 */
const create = (data) => new Promise(async (resolve, reject) => {
  const {
    username, password, name, zipcode,
    address, birthDate, gender, phone,
    citizenId, email
  } = data
  const { firstName, lastName } = name
  const valid = await validation({
    username: username,
    citizenId: citizenId,
    email: email
  })

  if (!valid) return reject(new Error('username or citizendId or email duplicated'))
  const hash = await passwordHelpers.generate(password)

  const doc = new CustomerSchema({
    username: username,
    password: hash,
    'name.firstName': firstName,
    'name.lastName': lastName,
    email: email,
    zipcode: zipcode,
    address: address,
    birthDate: birthDate,
    phone: phone,
    gender: gender,
    citizenId: citizenId
  })

  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
 * @param  {String} username
 * @param  {String} password
 * @returns {Object}
 */
const login = (username, password) => new Promise(async (resolve, reject) => {
  try {
    const res = await loginHelpers(username, password, CustomerSchema)
    resolve(res)
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  schema: CustomerSchema,
  create: create,
  login: login
}
