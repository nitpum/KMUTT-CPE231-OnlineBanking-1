const moment = require('moment')

/**
 * @param  {Array} range - array of years
 * @param  {String} unit - days, months, years default is years
 * @returns {Array} - array of date
 */
module.exports = (range, unit = 'years') => new Promise((resolve, reject) => {
  const result = range.map(d => moment().subtract(d, unit).toDate())
  resolve(result)
})
