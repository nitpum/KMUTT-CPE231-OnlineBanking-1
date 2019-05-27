const QueryModel = require('../query')

const PERMISSION = 'general'

const query = {
  all: (limit = 5000) => QueryModel.all(limit, PERMISSION),
  search: (s, limit = 1000) => QueryModel.search(s, limit, PERMISSION),
  id: (id) => QueryModel.id(id)
}

module.exports = query
