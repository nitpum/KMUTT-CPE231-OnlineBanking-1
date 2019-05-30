const CardModel = require('./schema')
const QueryModel = require('./query')

// helpers
const randomIdString = require('../helpers/virtual-id')

/**
 * edit card
 * @param  {Object} data
 * @param  {Object} data.accountId - mongodb object
 * @param  {String} data.holder - holder
 * @param  {Date} data.expired - holder
 * @param  {String} data.cvv - cvv
 * @param  {String} data.pin - pin
 * @param  {Date} data.paymentDate - pin
 */
const create = (data) => new Promise(async (resolve, reject) => {
  const cardId = randomIdString(16)
  data.cardId = cardId
  const doc = new CardModel(data)
  doc.save(err => {
    if (err) return reject(err)
    resolve(doc)
  })
})

/**
 * edit card
 * @param  {Object} id - mongodb object id
 * @param  {Object} data
 * @param  {Object} data.accountId - mongodb object
 * @param  {String} data.holder - holder
 * @param  {Date} data.expired - holder
 * @param  {String} data.cvv - cvv
 * @param  {String} data.pin - pin
 * @param  {Date} data.paymentDate - pin
 */
const edit = (id, data) => new Promise(async (resolve, reject) => {
  CardModel.findByIdAndUpdate(id, data, (err, doc) => {
    if (err) return reject(err)
    resolve(doc)
  })
})

const remove = (id) => new Promise((resolve, reject) => {
  CardModel.findByIdAndDelete(id, (err, doc) => {
    if (!doc) return reject(new Error('not found this card'))
    if (err) return reject(err)
    resolve(doc)
  })
})

module.exports = {
  create: create,
  edit: edit,
  delete: remove,
  query: QueryModel
}
