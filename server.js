const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')

const app = express()
dotenv.config()
app.use(bodyParser.json())

const port = process.env.PORT || 3004

mongoose.connect(process.env.MONGO_URI, { dbName: 'users_db' })
    .then(() => console.log('Connected Successfully'))
    .catch((error) => console.log('Error', error))

app.use('/', userRoutes)

app.listen(port, () => console.log(`Listening on port ${port}`))