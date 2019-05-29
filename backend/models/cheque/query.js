const chequeSchema = require('./schema')

const query = {
  /**
       * get all chrque
       * @param  {Number} limit=5000 - list first 5000 chrque order by indexed
       * @returns {Array} - mongodb object
       */
  all: (limit = 5000) => new Promise((resolve, reject) => {
    chequeSchema.find({})
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),
  /**
     * @param  {String} s
     * @param  {Number} limit=1000 list search 1000 chrque order by indexed
     */
  search: (s, limit = 1000) => new Promise((resolve, reject) => {
    chequeSchema.find({ $text: { $search: s } })
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),
  /**
     * @param  {String} id - mongodb object id
     * @returns {Object} - mongodb object
     */
  id: (id) => new Promise((resolve, reject) => {
    chequeSchema.findById(id)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  })
}

module.exports = query
