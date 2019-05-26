const moment = require('moment')
const CustomerModel = require('./schema')

// helpers
const mapObjectIdHelpers = require('../helpers/map-mongodb-objectId')
const generateDateRangeHelpers = require('../helpers/generate-date-range')
const queryDateRangeHelpers = require('../helpers/query-date-range')

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
  age: () => new Promise(async (resolve, reject) => {
    const range = [0, 15, 30, 45, 60, 75, 90, 105, 1000]
    //   const query = JSON.stringify(
    //     `[
    //   { "$match": {
    //     "birthDate": {
    //       "$lt": "0",
    //       "$gte": "78788888"
    //     }
    //   } },
    //   { "$count": 'n' }
    // ]`)

    const query = `
    [
      {"$count": "n"}
    ]
    `

    const result = await queryDateRangeHelpers({
      array: range
    }, query, CustomerModel, 'birthDate')
    resolve(result)
    // )
    // const result = []
    // const allPromise = []
    // let rangeDate = await generateDateRangeHelpers(range)
    // rangeDate.forEach((d, i) => {
    //   allPromise.push(
    //     eachDatePromise(rangeDate, result, d, i)
    //   )
    // })

    // await Promise.all(allPromise)
    // resolve(result)
  })
}

const eachDatePromise = (rangeDate, output, d, i) => new Promise((resolve, reject) => {
  CustomerModel.aggregate([
    { $match: {
      birthDate: {
        $lt: rangeDate[i],
        $gte: rangeDate[i + 1]
      }
    } },
    { $count: 'n' }
  ]).then(doc => {
    resolve(
      output.push({
        n: doc[0] ? doc[0].n : 0,
        range: [`${moment().year() - moment(d).year()}`, `${moment().year() - moment(rangeDate[i + 1]).year()}`]
      })
    )
  })
})

analytic.age().then(res => console.log(res))

module.exports = analytic
