const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

/**
 * @param  {Array} - list of object id (String)
 * @returns {Array} - mongodb object that can pass to mongoose method
 */
module.exports = list => new Promise((resolve, reject) => {
  const result = list.map(x => ObjectId(x))
  resolve(result)
})
