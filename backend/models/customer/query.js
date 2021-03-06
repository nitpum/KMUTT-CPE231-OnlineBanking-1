const CustomerSchema = require('./schema')

const query = {
  /**
       * get all branch
       * @param  {Number} limit=5000 - list first 5000 branch order by indexed
       * @returns {Array} - mongodb object
       */
  all: (limit = 5000) => new Promise((resolve, reject) => {
    CustomerSchema.find({})
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),
  /**
     * @param  {String} s
     * @param  {Number} limit=1000 list search 1000 branch order by indexed
     */
  search: (s, limit = 1000) => new Promise((resolve, reject) => {
    CustomerSchema.find({ $text: { $search: s } })
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),
  /**
     * @param  {String} id - citizenId
     * @returns {Object} - mongodb object
     */
  id: (id) => new Promise((resolve, reject) => {
    CustomerSchema.findById(id)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),

  citizenId: (id) => new Promise((resolve, reject) => {
    CustomerSchema.findOne({ citizenId: id })
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  })
}

module.exports = query
