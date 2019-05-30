// models
const TransactionModel = require('./schema')
const staffModel = require('../../models/staff')

const staffValidation = (id) => new Promise((resolve, reject) => {
  staffModel.schema.findById(id, (err, doc) => {
    if (err) return reject(err)
    if (!doc) return reject(new Error('not found staff from this id'))
    resolve(doc)
  })
})

/**
 * @param  {Object} id - cheque mongodb id
 * @param  {Object} cheque - cheque object
 * @param  {Object} account - account object
 * @returns {Object} mongodb object
 */
const cashUp = (id, cheque, account, staffId) => new Promise(async (resolve, reject) => {
  try {
    const { amount, byOrganizationId, _id } = cheque
    const staff = await staffValidation(staffId)

    const doc = new TransactionModel({
      type: 'CHEQUE',
      amount: amount,
      balance: account.balance - amount,
      ref1: byOrganizationId,
      chequeId: _id,
      accountId: account._id,
      staff: staff
    })

    doc.save(err => {
      if (err) reject(err)
      resolve(doc)
    })
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  cashUp: cashUp
}
