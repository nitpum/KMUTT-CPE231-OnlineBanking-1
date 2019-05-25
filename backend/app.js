const path = require('path')
const http = require('http')

const express = require('express')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

const configDB = require('./configs/db')
mongoose.connect(
  configDB.url, configDB.options
)

app.use(passport.initialize())
app.use(passport.session())
require('./models/admin/passport')(passport)
require('./models/staff/passport')(passport)

const configSession = require('./configs/session')
app.use(session(configSession))

const router = require('./routes')(app)

const server = http.createServer(app)
server.listen(8080, () => {
  console.log(`start server : 8080 PID : ${process.pid}`)
})
