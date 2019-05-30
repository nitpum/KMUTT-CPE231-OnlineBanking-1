
// models
const ServiceReferenceSchema = require('./schema')
const ServiceRefTypeModel = require('./type')
const QueryModel = require('./query')
/**
  * create service ref
 * @param  {Object} data
 * @param  {Object} data.organizationId - organization mongodb object id
 * @param  {String} data.detail - password enum: ['BANK', 'COMPANY', 'ETC']
 * @param  {Number} data.fee - email
 * @param  {Object} data.typeId - typeId mongodb object id
 * @returns {Object} - mongodb document
 */
const create = data => new Promise((resolve, reject) => {
  const doc = new ServiceReferenceSchema(data)
  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
  * edit service ref
 * @param  {Object} data
 * @param  {Object} data.organizationId - organization mongodb object id
 * @param  {String} data.detail - password enum: ['BANK', 'COMPANY', 'ETC']
 * @param  {Number} data.fee - email
 * @param  {Object} data.typeId - typeId mongodb object id
 * @returns {Object} - mongodb document
 */
const edit = (id, data) => new Promise((resolve, reject) => {
  ServiceReferenceSchema.findByIdAndUpdate(id, data, (err, doc) => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
 * remove service ref
 * @param  {String} id - mongodb id
 * @returns {Object} mongodb object
 */
const remove = (id) => new Promise((resolve, reject) => {
  ServiceReferenceSchema.findOneAndDelete({ _id: id }, (err, res) => {
    if (err) reject(err)
    if (!res) reject(new Error('not found'))
    resolve(res)
  })
})

const serviceRef = {
  create: create,
  edit: edit,
  delete: remove,
  query: QueryModel,
  schema: ServiceReferenceSchema

}

module.exports = {
  serviceRef: serviceRef,
  serviceType: ServiceRefTypeModel
}
