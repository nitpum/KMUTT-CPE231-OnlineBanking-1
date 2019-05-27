const AdminModel = require('./schema')

const query = {
  /**
       * get all branch
       * @param  {Number} limit=5000 - list first 5000 branch order by indexed
       * @returns {Array} - mongodb object
       */
  all: (limit = 5000) => new Promise((resolve, reject) => {
    AdminModel.find({})
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),

  /**
     * @param  {String} id - mongodb object id
     * @returns {Object} - mongodb object
     */
  id: (id) => new Promise((resolve, reject) => {
    AdminModel.findById(id)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  })
}

module.exports = query
