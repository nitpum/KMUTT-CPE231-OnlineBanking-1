const CustomerModel = require('./schema')

// helpers
const mapObjectIdHelpers = require('../helpers/map-mongodb-objectId')
const generateDateRangeHelpers = require('../helpers/generate-date-range')

generateDateRangeHelpers(range).then(n => console.log(n))

const analytic = {
  balance: {
    /**
     * get all balance with branch
     * @returns {Object} - { balance: n }
     */
    all: () => new Promise((resolve, reject) => {
      CustomerModel.aggregate([
        { $match: {} },
        {
          $group: {
            _id: null,
            balance: {
              $sum: '$balance'
            }
          }
        }
      ]).then(doc => resolve({
        balance: doc[0].balance
      }))
        .catch(err => reject(err))
    }),

    /**
     * sum by list of id
   * @param  {Array} list - list of object_id
   * @returns {Array} - mongodb object
   */
    idList: (list) => new Promise(async (resolve, reject) => {
      const objectIdLists = await mapObjectIdHelpers(list)
      CustomerModel.aggregate([
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

  /**
   * count staff
   * @returns {Object} - number of staff
   * @property {Object} nStaffs - number of staff
   */
  count: () => new Promise((resolve, reject) => {
    CustomerModel.find({}).countDocuments((err, n) => {
      if (err) reject(err)
      resolve({
        nCustomers: n
      })
    })
  }),

  // 0-15 16-30 31-45 46-60 61-75 76-90 91-105+
  age: () => {
    const range = [0, 15, 30, 45, 60, 75, 90, 105]
    return null
  }
}

module.exports = analytic
