const bcrypt = require('bcryptjs')

const config = require('../../configs/security')

const hash = (password) => new Promise((resolve, reject) => {
  bcrypt.genSalt(config.round, (err, salt) => {
    if (err) reject(err)
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) reject(err)
      resolve(hash)
    })
  })
})

const compare = (password, hash) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hash, (err, res) => {
    if (err) reject(err)
    resolve(res)
  })
})

module.exports = {
  generate: hash,
  compare: compare
}
