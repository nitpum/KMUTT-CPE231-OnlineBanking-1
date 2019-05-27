const AnalyticModel = require('../analytic')

const PERMISSION = 'general'

const analytic = {
  count: () => AnalyticModel.count(PERMISSION)
}

module.exports = analytic
