const express = require('express')
const gests = require('./data/gests')

const app = express()

app.get('/', (req, res) => {
  res.send('API is Running ....')
})


app.get('/api/gests', (req, res) => {
  res.json(gests)
})

app.get('/api/gests/:id', (req, res) => {
  const gest = gests.find((g) => g._id === req.params.id)
  res.json(gest)
})

app.listen(5000, console.log('server runned on port 5000'))