const AnalyticModel = require('../analytic')

const PERMISSION = 'manager'

const analytic = {
  count: () => AnalyticModel.count(PERMISSION)
}

module.exports = analytic
