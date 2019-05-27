const whitelist = ['http://localhost:3000']

module.exports = {
  origin: (origin, cb) => {
    if (whitelist.indexOf(origin) !== -1) {
      cb(null, true)
    } else {
      cb(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}
