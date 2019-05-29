// models
const AccountTypeModel = require('./schema')
const QueryModel = require('./query')

/**
  * create bank account
 * @param  {Object} data
 * @param  {String} data.name - username
 * @param  {Number} data.fee - customer mongodb object
 * @param  {Number} data.interestMRound - 1-12 default is 12
 * @param  {Object} data.interest - % of interest
 * @param  {String} data.DepositRound - number of months
 * @param  {String} data.minDeposit - min deposit per operate
 * @param  {String} data.interestMin - penalty interest
 * @returns {Object} - mongodb document
 */
const create = data => new Promise((resolve, reject) => {
  const doc = new AccountTypeModel(data)
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
  AccountTypeModel.findByIdAndUpdate(id, data, (err, doc) => {
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
  AccountTypeModel.findOneAndDelete({ _id: id }, (err, res) => {
    if (err) reject(err)
    if (!res) reject(new Error('not found'))
    resolve(res)
  })
})

const accountType = {
  create: create,
  edit: edit,
  delete: remove,
  query: QueryModel
}

module.exports = accountType
