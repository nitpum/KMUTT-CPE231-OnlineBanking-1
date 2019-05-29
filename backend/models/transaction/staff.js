const TransactionSchema = require('./schema')

const create = data => new Promise((resolve, reject) => {
  const { staff, type, surrogateName, accountId,
    chequeId, ref1, ref2 } = data

  const parser = {
    staff: staff,
    type: type,
    surrogateName: surrogateName

  }

  const doc = TransactionSchema({
    staff: staff
  })
})

module.exports = {
  create: create
}
