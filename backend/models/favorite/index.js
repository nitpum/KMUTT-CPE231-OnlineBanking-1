const FavoriteSchema = require('./schema')
const QueryModel = require('./query')

/**
 * create customer user
 * @param  {Object} data
 * @param  {String} data.customerId - mongodb ObjectId
 * @param  {String} data.ref1 - ref1 ObjectId
 * @param  {String} data.ref2 - ref2
 * @param  {String} data.name - name
 * @returns {Object} - mongodb document
 */
const create = (data) => new Promise(async (resolve, reject) => {
  const {
    customerId, ref1, ref2, name
  } = data

  /* valid duplicate here */

  const doc = new FavoriteSchema({
    customerId,
    ref1,
    ref2,
    name
  })

  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

module.exports = {
  schema: FavoriteSchema,
  query: QueryModel,
  create
}
