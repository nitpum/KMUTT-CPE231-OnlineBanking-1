const passwordHelpers = require('./password-hash')

module.exports = (username, password, model) => new Promise(async (resolve, reject) => {
  try {
    const doc = await model.findOne({ username: username })
    if (!doc) resolve(false)
    const compare = await passwordHelpers.compare(password, doc.password)
    if (compare) resolve(doc)
    else resolve(false)
  } catch (err) {
    reject(err)
  }
})
