const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

// Routes
const authRoutes = require('./routes/Auth')
const todoRoutes = require('./routes/Todo')
const { connect } = require('mongoose')

// Register Routes
app.use('/api/user', authRoutes)
app.use('/api/todo', todoRoutes)

module.exports = app