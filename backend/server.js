import express from 'express'
import dotenv from 'dotenv'
import gests from './data/gests.js'


dotenv.config()


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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))