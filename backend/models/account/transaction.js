const accountModel = require('./schema')

/**
 * @param  {Object} id - account id mongodb object
 * @param  {Number} amount - trasaction amount
 * @returns {Object} - mongodb result object
 */
const withdraw = (id, amount) => new Promise(async (resolve, reject) => {
  try {
    const { balance, _id } = await accountModel.findOne({ _id: id }).select('balance')
    console.log(_id, balance)
    if ((balance - amount) < 0) return reject(new Error('cannot op cause not enough balance'))
    accountModel.findByIdAndUpdate(id, { balance: balance - amount })
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  } catch (err) {
    reject(err)
  }
})

/**
 * @param  {Object} id - account id mongodb object
 * @param  {Number} amount - trasaction amount
 * @returns {Object} - mongodb result object
 */
const deposit = (id, amount) => new Promise(async (resolve, reject) => {
  try {
    const { balance, _id } = await accountModel.findOne({ _id: id }).select('balance')
    console.log(_id, balance)
    accountModel.findByIdAndUpdate(id, { balance: balance + amount })
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  } catch (err) {
    reject(err)
  }
})

module.exports = {
  withdraw: withdraw,
  deposit: deposit
}
