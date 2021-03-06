const path = require('path')
const http = require('http')

const morgan = require('morgan')
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

const configDB = require('./configs/db')
mongoose.connect(
  configDB.url, configDB.options
)
mongoose.set('useFindAndModify', false)

app.use(passport.initialize())
app.use(passport.session())
const configPassport = require('./configs/passport')(passport)

const configSession = require('./configs/session')
app.use(session(configSession))

const router = require('./routes')(app)

const server = http.createServer(app)
server.listen(8080, () => {
  console.log(`start server : 8080 PID : ${process.pid}`)
})

const initHelper = require('./init')
initHelper()
