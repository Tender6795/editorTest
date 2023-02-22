const express = require('express')
const cors = require('cors')
require('dotenv').config()
const sequelize = require('./db')
const models = require('./src/models/models')
const router = require('./src/routes')
const errorMidleware = require('./src/midleware/ErrorHandling.middleware')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json({ limit: '10mb' }))
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
)
app.use('/api', router)
app.use(errorMidleware)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => {
      console.log(`Server start on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
