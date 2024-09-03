const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
const port = 16108

dotenv.config()

app.use(cors({ origin: process.env.FRONTEND }))
app.use(express.json())

const db = require('./database.js')

app.get('/', (req, res) => {
  res.send('Family Budgeter')
})

app.listen(port, () => {
  console.log(`Family Budgeter app listening on port ${port}`)
})