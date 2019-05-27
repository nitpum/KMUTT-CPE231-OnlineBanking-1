const BranchModel = require('./schema')

// helpers
const mapObjectIdHelpers = require('../helpers/map-mongodb-objectId')

const analytic = {
  balance: {
    /**
     * get all balance with branch
     * @returns {Array} - mongodb object
     */
    all: () => new Promise((resolve, reject) => {
      BranchModel.aggregate([
        { $match: {} },
        {
          $group: {
            _id: null,
            balance: {
              $sum: '$balance'
            }
          }
        }
      ]).then(doc => {
        resolve(doc)
      }).catch(err => reject(err))
    }),

    /**
     * sum by list of id
   * @param  {Array} list - list of object_id
   * @returns {Array} - mongodb object
   */
    idList: (list) => new Promise(async (resolve, reject) => {
      const objectIdLists = await mapObjectIdHelpers(list)
      BranchModel.aggregate([
        { $match: { _id: { $in: objectIdLists } } },
        {
          $group: {
            _id: null,
            balance: {
              $sum: '$balance'
            }
          }
        }
      ]).then(doc => resolve(doc))
        .catch(err => reject(err))
    })
  },
  count: () => new Promise((resolve, reject) => {
    BranchModel.countDocuments((err, n) => {
      if (err) reject(err)
      resolve(n)
    })
  })
}

module.exports = analytic
