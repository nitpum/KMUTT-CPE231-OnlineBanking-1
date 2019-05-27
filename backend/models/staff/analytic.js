const StaffModel = require('./schema')

// helpers
const queryDateRangeArrayHelpers = require('../helpers/query-date-range-array')

const analytic = {
  /**
   * count staff
   * @returns {Object} - number of staff
   * @property {Object} nStaffs - number of staff
   */
  count: () => new Promise((resolve, reject) => {
    StaffModel.find({}).countDocuments((err, n) => {
      if (err) reject(err)
      resolve({
        nStaffs: n
      })
    })
  }),

  /**
   * age range count
   * @param  {Array} range.array - number of range
   * @param  {Number} range.unit - unit of range
   */
  age: (range = {
    array: [0, 15, 30, 45, 60, 75, 90, 105, 1000]
  }) => new Promise(async (resolve, reject) => {
    // 0-15 16-30 31-45 46-60 61-75 76-90 91-105+
    const query = `[ {"$count": "n"} ]`

    const result = await queryDateRangeArrayHelpers({
      array: range.array,
      unit: range.unit
    }, query, StaffModel, 'birthDate')
    resolve(result)
  })
}

module.exports = analytic
