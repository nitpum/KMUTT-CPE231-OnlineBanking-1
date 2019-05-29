const accountModel = require('./schema')

/**
 * @param  {Object} id - account id mongodb object
 * @param  {Number} amount - trasaction amount
 * @returns {Object} - mongodb result object
 */
const withdraw = (id, amount) => new Promise(async (resolve, reject) => {
  try {
    const { balance, _id } = await accountModel.findOne({ _id: id }).select('balance')
    if ((balance - amount) < 0) return reject(new Error('cannot op cause not enough balance'))
    accountModel.findByIdAndUpdate(_id, { balance: balance - amount })
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
    accountModel.findByIdAndUpdate(_id, { balance: balance + amount })
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  } catch (err) {
    reject(err)
  }
})

/**
 * @param  {Object} id - account id mongodb object
 * @param  {String} status - enum: ['ACTIVE', 'LOCK', 'ETC']
 * @returns {Object} - mongodb result object
 */
const setStatus = (id, status) => new Promise((resolve, reject) => {
  accountModel.findByIdAndUpdate(id, { status: status }, (err, doc) => {
    if (err) return reject(err)
    if (!doc) return reject(new Error('not found this account'))
    resolve(doc)
  })
    .catch(err => reject(err))
})

module.exports = {
  withdraw: withdraw,
  deposit: deposit,
  setStatus: setStatus
}
