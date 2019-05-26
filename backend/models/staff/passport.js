const LocalStrategy = require('passport-local').Strategy

const PERMISSION = 'staff'

const StaffModel = require('./index')
const StaffSchema = StaffModel.schema

module.exports = passport => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // next should save only permission & id
  passport.deserializeUser((id, done) => {
    StaffSchema.findById(id, (err, user) => {
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
        console.log(`staff access from : ${username}`)

        StaffModel.login(username, password).then(doc => {
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
