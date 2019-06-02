// models
const QueryModel = require('./query')
const chequeSchema = require('./schema')
const TransactionModel = require('./transaction')

// helpers
const virtualChequeIdHelpers = require('../helpers/virtual-id')

const virtualIdValidation = () => new Promise(async (resolve, reject) => {
  try {
    let state = false
    let accId = ''
    while (!state) {
      accId = virtualChequeIdHelpers(16)
      const doc = await chequeSchema.findOne({ chequeId: accId })
      if (!doc) return resolve(accId)
      if (accId === doc.accountId) state = false
      else state = true
    }
    resolve(accId)
  } catch (err) {
    reject(err)
  }
})

/**
  * create cheque
 * @param  {Object} data
 * @param  {String} data.byOrganizationId - organization mongodb objectid
 * @param  {String} data.accountId - this bank
 * @param  {String} data.accountNo - other bank
 * @param  {String} data.amount - amount
 * @param  {String} data.payFor - name
 * @param  {String} data.type - enum: ['CHASH', 'ORDER', 'ETC']
 * @param  {Date} data.status - enum: ['ACTIVE', 'REJECT', 'ETC']
 * @param  {String} data.drawee - ['M', 'F', 'U']
 * @param  {String} data.drawDate - citizenId
 * @returns {Object} - mongodb document
 */
const create = data => new Promise(async (resolve, reject) => {
  try {
    const virtualId = await virtualIdValidation()
    data.chequeId = virtualId
    const doc = chequeSchema(data)
    doc.save(err => {
      if (err) reject(err)
      resolve(doc)
    })
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  create: create,
  query: QueryModel,
  transaction: TransactionModel,
  schema: chequeSchema
}
