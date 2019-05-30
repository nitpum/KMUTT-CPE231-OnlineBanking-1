// models
const TransactionModel = require('./schema')

/**
 * @param  {Object} id - cheque mongodb id
 * @param  {Object} cheque - cheque object
 * @param  {Object} account - account object
 * @returns {Object} mongodb object
 */
const cashUp = (id, cheque, account) => new Promise(async (resolve, reject) => {
  try {
      console.log(account)
    const { amount, byOrganizationId, _id } = cheque

    const doc = new TransactionModel({
      type: 'CHEQUE',
      amount: amount,
      balance: account.balance - amount,
      ref1: byOrganizationId,
      chequeId: _id,
      accountId: account._id
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
