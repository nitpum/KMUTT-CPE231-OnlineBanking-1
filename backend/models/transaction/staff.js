const TransactionSchema = require('./schema')
const staffModel = require('../../models/staff')
const accountModel = require('../../models/account')
const organizationModel = require('../../models/organization')

const init = require('../../configs/init')

const staffValidation = (id) => new Promise((resolve, reject) => {
  staffModel.schema.findById(id, (err, doc) => {
    if (err) return reject(err)
    if (!doc) return reject(new Error('not found staff from this id'))
    resolve(doc)
  })
})

const accountValidation = (id) => new Promise((resolve, reject) => {
  accountModel.account.schema.findById(id, (err, doc) => {
    if (err) return reject(err)
    if (!doc) return reject(new Error('not found account from this id'))
    resolve(doc)
  })
})

const orgInfo = () => new Promise((resolve, reject) => {
  const doc = organizationModel.schema.findOne({ name: init.organization.name }, (err, doc) => {
    if (err) return reject(err)
    resolve(doc._id)
  })
})

/**
 * with draw
 * @param  {Object} data
 * @param  {Object} data.surrogateName - surrogateName
 * @param  {Number} amount - amount
 * @param  {Object} data.staffId - staffId mongodb object id
 */
const withdraw = (amount, accountId, staffId) => new Promise(async (resolve, reject) => {
  try {
    const staff = await staffValidation(staffId)
    const account = await accountValidation(accountId)
    const ref1 = await orgInfo()
    const doc = new TransactionSchema({
      type: 'WITHDRAW',
      amount: amount,
      balance: account.balance,
      ref1: ref1,
      accountId: account._id,
      staff: staff,
      branch: staff.branch
    })
    doc.save(err => {
      if (err) return reject(err)
      resolve(doc)
    })
  } catch (err) {
    reject(err)
  }
})

/**
 * with draw
 * @param  {Object} data
 * @param  {Object} data.surrogateName - surrogateName
 * @param  {Number} amount - amount
 * @param  {Object} data.staffId - staffId mongodb object id
 */
const deposit = (amount, accountId, staffId) => new Promise(async (resolve, reject) => {
  try {
    const staff = await staffValidation(staffId)
    const account = await accountValidation(accountId)
    const ref1 = await orgInfo()
    const doc = new TransactionSchema({
      type: 'DEPOSIT',
      amount: amount,
      balance: account.balance,
      ref1: ref1,
      accountId: account._id,
      staff: staff,
      branch: staff.branch
    })
    doc.save(err => {
      if (err) return reject(err)
      resolve(doc)
    })
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  withdraw: withdraw,
  deposit: deposit
}
