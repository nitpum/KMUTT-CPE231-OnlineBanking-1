const ServiceTypeSchema = require('./schema')

// models
const QueryModel = require('./query')

/**
 * create service type
 * @param  {Object} data
 * @param  {String} data.name - name of service type
 * @param  {String} data.detail - deatil of type
 * @returns {Object} - mongodb document
 */
const create = (data) => new Promise((resolve, reject) => {
  const doc = new ServiceTypeSchema(data)
  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
 * edit service type
 * @param  {String} id - mongodb id
 * @param  {Object} data
 * @param  {String} data.name - name of service type
 * @param  {String} data.detail - deatil of type
 * @returns {Object} - mongodb document
 */
const edit = (id, data) => new Promise(async (resolve, reject) => {
  try {
    const doc = await ServiceTypeSchema.findByIdAndUpdate(id, { $set: data })
    if (!doc) return reject(new Error('not found id'))
    resolve(doc)
  } catch (err) {
    reject(err)
  }
})

/**
 * @param  {String} id - mongodb id
 * @returns {Object} mongodb object
 */
const remove = id => new Promise((resolve, reject) => {
  ServiceTypeSchema.findOneAndDelete({ _id: id }, (err, res) => {
    if (err) reject(err)
    if (!res) reject(new Error('not found'))
    resolve(res)
  })
})

module.exports = {
  create: create,
  edit: edit,
  delete: remove,
  query: QueryModel,
  schema: ServiceTypeSchema
}
