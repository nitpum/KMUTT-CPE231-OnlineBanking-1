const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const PERMISSION = 'admin'

const AdminSchema = require('./schema')
const AdminModel = require('./index')

module.exports = passport => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // next should save only permission & id
  passport.deserializeUser((id, done) => {
    AdminSchema.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use(
    'admin',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password'
      },
      (username, password, done) => {
        console.log(`admin access from : ${username}`)

        AdminModel.login(username, password).then(doc => {
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
