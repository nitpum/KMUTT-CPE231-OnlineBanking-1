const mongoose = require('mongoose')
const BranchModel = require('./schema')

const ObjectId = mongoose.Types.ObjectId

const mapObjectId = (list) => {
  const result = list.map(x => ObjectId(x))
  return result
}

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
    idList: (list) => new Promise((resolve, reject) => {
      const objectIdLists = mapObjectId(list)
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
  }
}

module.exports = analytic
