const AdminSchema = require('./schema')
const passwordHelpers = require('../helpers/password-hash')

const validation = (username) => new Promise((resolve, reject) => {
  AdminSchema.findOne({ username: username }, (err, doc) => {
    if (err) reject(err)
    if (doc) resolve(false)
    else resolve(true)
  })
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
  const userValid = await validation(username)
  if (!userValid) reject(Error('username duplicated'))
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

module.exports = {
  create: create,
  validation: validation
}
