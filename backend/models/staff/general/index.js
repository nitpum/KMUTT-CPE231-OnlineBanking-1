const StaffSchema = require('../schema')

const PERMISSION = 'general'

// helpers
const passwordHelpers = require('../../helpers/password-hash')
const loginHelpers = require('../../helpers/user-login')

// models
const QueryModel = require('./query')
const AnalyticModel = require('./analytic')

const validation = (data) => new Promise(async (resolve, reject) => {
  const [username, citizenId, email] = await Promise.all([
    StaffSchema.findOne({ username: data.username }),
    StaffSchema.findOne({ citizenId: data.citizenId }),
    StaffSchema.findOne({ email: data.email })
  ])
  if (!username && !citizenId && !email) resolve(true)
  resolve(false)
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
 * @param  {String} data.phone - phone
 * @param  {String} data.branch - branch that staff assigned
 * @returns {Object} - mongodb document
 */
const create = (data) => new Promise(async (resolve, reject) => {
  const {
    username, password, name, zipcode,
    address, birthDate, gender, phone,
    citizenId, position, branch, email
  } = data
  const { firstName, lastName } = name
  const valid = await validation({
    username: username,
    citizenId: citizenId
  })
  if (!valid) return reject(Error('username or citizendId or email duplicated'))
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
    email: email,
    phone: phone,
    permission: PERMISSION
  })

  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
 * edit staff user
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
 * @param  {String} data.branch - branch that staff assigned
 * @returns {Object} - mongodb document
 */
const edit = (id, data) => new Promise(async (resolve, reject) => {
  const {
    password
  } = data
  if (data.password) {
    const hash = await passwordHelpers.generate(password)
    data.password = hash
  }
  StaffSchema.findByIdAndUpdate(id, data, (err, doc) => {
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
    const res = await loginHelpers(username, password, StaffSchema)
    resolve(res)
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  create: create,
  edit: edit,
  schema: StaffSchema,
  login: login,
  query: QueryModel,
  analytic: AnalyticModel
}
