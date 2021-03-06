const accountModel = require('./schema')

const query = {
  /**
       * get all account
       * @param  {Number} limit=5000 - list first 5000 branch order by indexed
       * @returns {Array} - mongodb object
       */
  all: (limit = 5000) => new Promise((resolve, reject) => {
    accountModel.find({})
      .populate('customerId')
      .populate('accountType')
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),

  search: (s, limit = 1000, permission) => new Promise((resolve, reject) => {
    let query = { $text: { $search: s } }
    if (permission) query = { ...query, ...{ permission: permission } }

    accountModel.find(query)
      .populate('customerId')
      .populate('accountType')
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),
  /**
     * @param  {String} id - mongodb object id
     * @returns {Object} - mongodb object
     */
  id: (id) => new Promise((resolve, reject) => {
    accountModel.findById(id)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),

  /**
     * @param  {String} accountId - bank acc
     * @returns {Object} - mongodb object
     */
  acc: (accountId) => new Promise((resolve, reject) => {
    accountModel.findOne({ accountId: accountId })
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  })
}

module.exports = query
