const chequeModel = require('./schema')

/**
 * @param  {Object} id - cheque id mongodb object
 * @returns {Object} - mongodb result object
 */
const cashUp = (id) => new Promise(async (resolve, reject) => {
  try {
    const doc = await chequeModel.findOne({ _id: id })
    if (!doc) return reject(new Error('not found cheque'))
    chequeModel.findByIdAndUpdate(id, { status: 'PAY' }, (err, doc) => {
      if (err) reject(err)
      resolve(doc)
    })
  } catch (err) {
    reject(err)
  }
})

const valid = (id) => new Promise(async (resolve, reject) => {
  try {
    const doc = await chequeModel.findOne({ _id: id })
    if (!doc) return reject(new Error('not found cheque'))
    resolve(doc)
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  cashUp: cashUp,
  valid: valid
}
