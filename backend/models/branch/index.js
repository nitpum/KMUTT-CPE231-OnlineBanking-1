const BranchSchema = require('./schema')

/**
 * @param  {Object} options
 * @param  {String} options.name - branch name
 * @param  {String} options.address - branch address
 * @param  {String} options.zipcode - branch zipcode
 * @param  {Number} options.balance - branch init balance
 * @returns {Object} mongodb document
 */
const create = (options = { balance: 0 }) => new Promise((resolve, reject) => {
  const { name, address, zipcode, balance } = options
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
  create: create
}
