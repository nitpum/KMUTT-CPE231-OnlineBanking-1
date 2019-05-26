const LocalStrategy = require('passport-local').Strategy

const PERMISSION = 'customer'

const CustomerModel = require('./index')
const CustomerSchema = CustomerModel.schema

module.exports = passport => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // next should save only permission & id
  passport.deserializeUser((id, done) => {
    CustomerSchema.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use(
    PERMISSION,
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password'
      },
      (username, password, done) => {
        console.log(`admin access from : ${username}`)

        CustomerModel.login(username, password).then(doc => {
          if (doc) {
            doc.permission = PERMISSION
            delete doc.password
            return done(null, doc)
          }
          return done(null, false)
        })
      }
    )
  )
}
