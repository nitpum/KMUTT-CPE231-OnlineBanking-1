const AccountSchema = require('./schema')
const AccTypeSchema = require('./type/schema')

// models
const AccountQueryModel = require('./query')
const AccountTypesModel = require('./type')
const CustomerModel = require('../customer')

const generateAccId = () => new Promise(async (resolve, reject) => {
  const stringGen = (len) => {
    let text = ''
    let charset = '0123456789'
    for (var i = 0; i < len; i++) { text += charset.charAt(Math.floor(Math.random() * charset.length)) }
    return text
  }

  try {
    let state = false
    let accId = ''
    while (!state) {
      accId = stringGen(16)
      const doc = await AccountQueryModel.acc(accId)
      if (!doc) return resolve(accId)
      if (accId === doc.accountId) state = false
      else state = true
    }
    resolve(accId)
  } catch (err) {
    reject(err)
  }
})

const customerValidation = (id) => new Promise(async (resolve, reject) => {
  const doc = await CustomerModel.query.citizenId(id)
  if (doc) resolve(String(doc._id))
  reject(new Error('not found this citizenId in customer'))
})

/**
  * create bank account
 * @param  {Object} data
 * @param  {String} data.accountId - username
 * @param  {Object} data.citizenId - customer mongodb object
 * @param  {Object} data.accountType - acc type mongodb object
 * @param  {Object} data.branchId - branchid mongodb object
 * @param  {String} data.status - status  enum: ['ACTIVE', 'LOCK', 'ETC']
 * @returns {Object} - mongodb document
 */
const create = data => new Promise(async (resolve, reject) => {
  try {
    const customerValid = await customerValidation(data.citizenId)
    data.customerId = customerValid
    delete data.citizenId
    const doc = new AccountSchema(data)
    doc.save(err => {
      if (err) reject(err)
      resolve(doc)
    })
  } catch (err) {
    reject(err)
  }
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
  query: AccountQueryModel,
  genId: generateAccId
}

module.exports = {
  account: account,
  type: AccountTypesModel
}
