const AdminSchema = require('./schema')
const QueryModel = require('./query')

// helpers
const passwordHelpers = require('../helpers/password-hash')
const loginHelpers = require('../helpers/user-login')

const validation = (data) => new Promise(async (resolve, reject) => {
  try {
    const [username, email] = await Promise.all([
      AdminSchema.findOne({ username: data.username }),
      AdminSchema.findOne({ email: data.email })
    ])
    if (!username && !email) resolve(true)
    resolve(false)
  } catch (err) {
    reject(err)
  }
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
  if (!valid) return reject(new Error('username or email duplicated'))
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

/**
 * @param  {String} id - mongodb id
 * @returns {Object} mongodb object
 */
const remove = id => new Promise((resolve, reject) => {
  AdminSchema.findOneAndDelete({ _id: id }, (err, res) => {
    if (err) reject(err)
    if (!res) reject(new Error('not found'))
    resolve(res)
  })
})

/**
  * edit admin user
 * @param  {Object} data
 * @param  {String} id - mongodb id
 * @param  {String} data.username - username
 * @param  {String} data.password - password
 * @param  {String} data.email - email
 * @returns {Object} - updated mongodb document
 */
const edit = (id, data) => new Promise(async (resolve, reject) => {
  try {
    const { password } = data
    let hash
    if (password) {
      hash = await passwordHelpers.generate(password)
      data.password = hash
    } else {
      delete data.password
    }

    const doc = await AdminSchema.findByIdAndUpdate(id, { $set: data }, { upsert: true })
    resolve(doc)
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  create: create,
  delete: remove,
  edit: edit,
  validation: validation,
  login: login,
  schema: AdminSchema,
  query: QueryModel
}
