require('dotenv').config()
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
require('./config/passport')(passport)
const path = require('path')

// Server
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(router)
app.use(express.static('static'))
app.use('/static', express.static(path.join(__dirname, 'static')))

// Passport
app.use(passport.initialize())
require('./routes')(router)

// Database
const database = require('./database')
database.connect()

// Listen
app.listen(process.env.PORT || 3000)
console.log(`Server is listening on port ${process.env.PORT || 3000}`)
