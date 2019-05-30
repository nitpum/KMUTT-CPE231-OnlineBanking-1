const TransactionSchema = require('./schema')
const staffModel = require('../../models/staff')

const init = require('../../configs/init')

const staffValidation = (id) => new Promise((resolve, reject) => {
  staffModel.schema.findById(id, (err, doc) => {
    if (err) return reject(err)
    if (!doc) return reject(new Error('not found staff from this id'))
    resolve(doc)
  })
})

/**
 * deposit
 * @param  {Object} data
 * @param  {Object} data.surrogateName - surrogateName
 * @param  {Number} amount - amount
 * @param  {Object} data.staffId - staffId mongodb object id
 */
const withdraw = (amount, account, staffId) => new Promise(async (resolve, reject) => {
  try {
    const staff = await staffValidation(staffId)
    const ref1 = init.serviceReference._id
    const doc = new TransactionSchema({
      type: 'WITHDRAW',
      amount: amount,
      balance: account.balance - amount,
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
  withdraw: withdraw

}
