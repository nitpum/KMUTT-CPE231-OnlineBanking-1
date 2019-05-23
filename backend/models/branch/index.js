const BranchSchema = require('./schema')

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
  if (!nameValid) reject(Error('name branch duplicated'))
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

const query = {
  /**
     * get all branch
     * @param  {Number} limit=5000 - list first 5000 branch order by indexed
     * @returns {Array} - mongodb object
     */
  all: (limit = 5000) => new Promise((resolve, reject) => {
    BranchSchema.find({})
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),
  /**
   * @param  {String} s
   * @param  {Number} limit=1000 list search 1000 branch order by indexed
   */
  search: (s, limit = 1000) => new Promise((resolve, reject) => {
    BranchSchema.find({ $text: { $search: s } })
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),
  /**
   * @param  {String} id - mongodb object id
   * @returns {Object} - mongodb object
   */
  id: (id) => new Promise((resolve, reject) => {
    BranchSchema.findById(id)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  })
}

module.exports = {
  create: create,
  schema: BranchSchema,
  query: query
}
