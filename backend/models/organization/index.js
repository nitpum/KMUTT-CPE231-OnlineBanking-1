const OrganizationSchema = require('./schema')

// models
const AnalyticModel = require('./analytic')
const QueryModel = require('./query')

/**
  * create organization
 * @param  {Object} data
 * @param  {String} data.name - username
 * @param  {String} data.type - password enum: ['BANK', 'COMPANY', 'ETC']
 * @param  {String} data.bankSwift - email
 * @param  {String} data.bankAccount - email
 * @returns {Object} - mongodb document
 */
const create = (data) => new Promise((resolve, reject) => {
  const doc = new OrganizationSchema(data)

  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
  * edit organization
* @param  {String} id - mongodb id
 * @param  {Object} data
 * @param  {String} data.name - username
 * @param  {String} data.type - password enum: ['BANK', 'COMPANY', 'ETC']
 * @param  {String} data.bankSwift - email
 * @param  {String} data.bankAccount - email
 * @returns {Object} - mongodb document
 */
const edit = (id, data) => new Promise((resolve, reject) => {
  OrganizationSchema.findByIdAndUpdate(id, data, (err, doc) => {
    if (err) reject(err)
    resolve(doc)
  })
})

/**
 * remove organization
 * @param  {String} id - mongodb id
 * @returns {Object} mongodb object
 */
const remove = (id) => new Promise((resolve, reject) => {
  OrganizationSchema.findOneAndDelete({ _id: id }, (err, res) => {
    if (err) reject(err)
    if (!res) reject(new Error('not found'))
    resolve(res)
  })
})

module.exports = {
  create: create,
  edit: edit,
  delete: remove,
  analytic: AnalyticModel,
  query: QueryModel,
  schema: OrganizationSchema
}
