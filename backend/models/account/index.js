const AccountSchema = require('./schema')
const AccTypeSchema = require('./type/schema')

// models
const AccountQueryModel = require('./query')

/**
  * create bank account
 * @param  {Object} data
 * @param  {String} data.accountId - username
 * @param  {Object} data.customerId - customer mongodb object
 * @param  {Object} data.accountType - acc type mongodb object
 * @param  {Object} data.branchId - branchid mongodb object
 * @param  {String} data.status - status  enum: ['ACTIVE', 'LOCK', 'ETC']
 * @returns {Object} - mongodb document
 */
const create = data => new Promise((resolve, reject) => {
  const doc = new AccountSchema(data)
  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
  * edit bank account
 * @param  {Object} data
 * @param  {String} data.accountId - username
 * @param  {Object} data.customerId - customer mongodb object
 * @param  {Object} data.accountType - acc type mongodb object
 * @param  {Object} data.branchId - branchid mongodb object
 * @param  {String} data.status - status  enum: ['ACTIVE', 'LOCK', 'ETC']
 * @returns {Object} - mongodb document
 */
const edit = (id, data) => new Promise((resolve, reject) => {
  AccountSchema.findByIdAndUpdate(id, data, (err, doc) => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
 * remove bank account
 * @param  {String} id - mongodb id
 * @returns {Object} mongodb object
 */
const remove = (id) => new Promise((resolve, reject) => {
  AccountSchema.findOneAndDelete({ _id: id }, (err, res) => {
    if (err) reject(err)
    if (!res) reject(new Error('not found'))
    resolve(res)
  })
})

const account = {
  create: create,
  edit: edit,
  delete: remove,
  query: AccountQueryModel
}

module.exports = {
  account: account
}
