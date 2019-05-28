const OrganizationModel = require('./schema')

const analytic = {
  count: () => new Promise((resolve, reject) => {
    OrganizationModel.countDocuments((err, n) => {
      if (err) reject(err)
      resolve(n)
    })
  })
}

module.exports = analytic
