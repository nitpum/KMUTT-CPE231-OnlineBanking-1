const chequeModel = require('./schema')

/**
 * @param  {Object} id - cheque id mongodb object
 * @returns {Object} - mongodb result object
 */
const cashUp = (id) => new Promise((resolve, reject) => {
  chequeModel.findByIdAndUpdate(id, { status: 'PAY' }, (err, doc) => {
    if (err) reject(err)
    resolve(doc)
  })
})

module.exports = {
  cashUp: cashUp
}
