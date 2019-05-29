const StaffSchema = require('./schema')

const query = {
  /**
       * get all branch
       * @param {String} permission - optional key e.g. permission
       * @param  {Number} limit=5000 - list first 5000 staff order by indexed
       * @returns {Array} - mongodb object
       */
  all: (limit = 5000, permission) => new Promise((resolve, reject) => {
    let query = {}
    if (permission) query = { permission: permission }
    StaffSchema.find(query)
      .populate('branch')
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),

  /**
     * @param  {String} s search
     * @param {String} permission - optional key e.g. permission
     * @param  {Number} limit=1000 list search 1000 branch order by indexed
     */
  search: (s, limit = 1000, permission) => new Promise((resolve, reject) => {
    let query = { $text: { $search: s } }
    if (permission) query = { ...query, ...{ permission: permission } }

    StaffSchema.find(query)
      .populate('branch')
      .limit(limit)
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  }),
  /**
     * @param  {String} id - mongodb object id
     * @returns {Object} - mongodb object
     */
  id: (id) => new Promise((resolve, reject) => {
    StaffSchema.findById(id)
      .populate('branch')
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  })

}

module.exports = query
