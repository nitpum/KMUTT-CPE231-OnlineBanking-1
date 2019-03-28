const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const configDB = require('./db')

const option = {
  url: configDB.url
}

module.exports = {
  name: 'KMUTT-online-banking',
  resave: true,
  saveUninitialized: true,
  secret: 'most4euei3n2secure1hash',
  cookie: {
    path: '/',
    httpOnly: true
  },
  store: new MongoStore(option)
}
