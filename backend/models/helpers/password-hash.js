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

module.exports = hash
