const StaffModel = require('./schema')

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
  })
}

module.exports = analytic
