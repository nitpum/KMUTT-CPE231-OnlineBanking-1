const FavoriteSchema = require('./schema')

const query = {
  customer: (id) => new Promise((resolve, reject) => {
    FavoriteSchema.find({ customerId: id })
      .then(doc => resolve(doc))
      .catch(err => reject(err))
  })
}

module.exports = query
