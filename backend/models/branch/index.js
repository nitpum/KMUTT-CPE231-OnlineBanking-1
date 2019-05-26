const BranchSchema = require('./schema')
const QueryModel = require('./query')
const AnalyticModel = require('./analytic')

const validation = (name) => new Promise((resolve, reject) => {
  BranchSchema.findOne({ name: name }, (err, doc) => {
    if (err) reject(err)
    if (doc) resolve(false)
    else resolve(true)
  })
})

/**
 * @param  {Object} options
 * @param  {String} options.name - branch name
 * @param  {String} options.address - branch address
 * @param  {String} options.zipcode - branch zipcode
 * @param  {Number} options.balance - branch init balance (default is 0)
 * @returns {Object} mongodb document
 */
const create = (options) => new Promise(async (resolve, reject) => {
  const { name, address, zipcode, balance } = options
  const nameValid = await validation(name)
  if (!nameValid) return reject(Error('name branch duplicated'))
  const doc = new BranchSchema({
    name: name,
    address: address,
    zipcode: zipcode,
    balance: balance
  })

  doc.save(err => {
    if (err) reject(err)
    resolve(doc)
  })
})

module.exports = {
  create: create,
  schema: BranchSchema,
  query: QueryModel,
  analytic: AnalyticModel
}
