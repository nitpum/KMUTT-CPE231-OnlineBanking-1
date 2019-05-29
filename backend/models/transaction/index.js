const TransactionSchema = require('./schema')

// models
const chequeModel = require('./cheque')

/**
  * create transaction
 * @param  {Object} data
 * @param  {String} data.type - enum: ['TRANSFER', 'RECEIVE', 'WITHDRAW', 'ETC']
 * @param  {Number} data.amount - amount of transaction
 * @param  {String} data.surrogateName - surrogateName
 * @param  {Object} data.accountId - accountId mongodb object id
 * @param  {Object} data.chequeId - accountId mongodb object id
 * @param  {Object} data.ref1 - ref1 mongodb object id
 * @param  {Object} data.ref2 - ref2
 * @returns {Object} - mongodb document
 */
const create = (data) => new Promise((resolve, reject) => {
  const doc = new TransactionSchema(data)
  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

module.exports = {
  create: create,
  cheque: chequeModel
}
