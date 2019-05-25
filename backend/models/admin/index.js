const AdminSchema = require('./schema')
const passwordHelpers = require('../helpers/password-hash')
const loginHelpers = require('../helpers/user-login')

const validation = (data) => new Promise(async (resolve, reject) => {
  // try {
  const [username, email] = await Promise.all([
    AdminSchema.findOne({ username: data.username }),
    AdminSchema.findOne({ email: data.email })
  ])
  if (!username && !email) resolve(true)
  reject(new Error('username or email duplicated'))
})

/**
 * create admin user
 * @param  {Object} data
 * @param  {String} data.username - username
 * @param  {String} data.password - password
 * @param  {String} data.email - email
 * @returns {Object} - mongodb document
 */
const create = (data) => new Promise(async (resolve, reject) => {
  const { username, password, email } = data
  const valid = await validation({
    username: username,
    email: email
  })
  if (!valid) reject(new Error('username duplicated'))
  const hash = await passwordHelpers.generate(password)

  const doc = new AdminSchema({
    username: username,
    password: hash,
    email: email
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
    const res = await loginHelpers(username, password, AdminSchema)
    resolve(res)
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  create: create,
  validation: validation,
  login: login,
  schema: AdminSchema
}
