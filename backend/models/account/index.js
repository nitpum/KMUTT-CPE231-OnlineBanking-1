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

const accountValidation = (id) => new Promise((resolve, reject) => {
  AccountSchema.findOne({ accountId: id })
    .then(doc => {
      if (doc) return reject(new Error('duplicated account id'))
      resolve(true)
    })
})

/**
  * create bank account
 * @param  {Object} data
 * @param  {String} data.accountId - virtual id
 * @param  {Object} data.customerId - customerId mongodb object
 * @param  {Object} data.accountType - accountType mongodb object
 * @param  {Object} data.branchId - branchId mongodb object
 * @param  {String} data.balance - balance
 * @param  {String} data.status - status enum: ['ACTIVE', 'LOCK', 'ETC']
 * @returns {Object} - mongodb document
 */
const create = data => new Promise(async (resolve, reject) => {
  try {
    const accIdValid = await accountValidation(data.accountId)
    data.accountId = accIdValid
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
 * @param  {String} data.accountId - accountId mongodb object
 * @param  {Object} data.customerId - customerId mongodb object
 * @param  {Object} data.accountType - accountType mongodb object
 * @param  {Object} data.branchId - branchId mongodb object
 * @param  {String} data.balance - balance
 * @param  {String} data.status - status enum: ['ACTIVE', 'LOCK', 'ETC']
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
