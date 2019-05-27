const moment = require('moment')

// helpers
const generateDateRangeArrayHelpers = require('./generate-date-range-array')
/**
 * @param  {Array} range - number of range [0, 15, 30, 999]
 * @param  {Array} range.array
 * @param  {String} range.unit - unit date days, months, years
 * @param  {Object} model - mongodb object
 * @param  {String} mongodbQuery - mongodb model e.g. [{$match: {}}, {$group: _id:null}]
 * @param  {String} key - key of date to filter e.g. createDate, brithDate
 * @returns {Array}
 */
module.exports = (range = {
  unit: 'years'
}, mongodbQuery, model, key) => new Promise(async (resolve, reject) => {
  const mongoDBQueryFormat = JSON.parse(mongodbQuery)
  const eachPromise = (rangeDate, output, d, i) => new Promise((resolve, reject) => {
    const keyString = {}
    keyString[key] = {
      $lt: rangeDate[i],
      $gte: rangeDate[i + 1]
    }
    const compoundQuery = [
      { $match: keyString },
      ...mongoDBQueryFormat
    ]

    model.aggregate(compoundQuery)
      .then(doc => resolve(
        output.push({
          n: doc[0] ? doc[0].n : 0,
          range: [`${moment().year() - moment(d).year()}`, `${moment().year() - moment(rangeDate[i + 1]).year()}`]
        })
      ))
  })

  const allPromise = []
  const result = []
  const rangeDate = await generateDateRangeArrayHelpers(range.array, range.unit)
  rangeDate.forEach(
    (d, i) => {
      allPromise.push(
        eachPromise(rangeDate, result, d, i)
      )
    }
  )

  await Promise.all(allPromise)
  resolve(result)
})
