const express = require('express')
const app = express()
require('dotenv').config()
const movieController = require ('./controllers/movies.js')
const mongoose = require ('mongoose')
const cors = require('cors')

// MIDDLEWARE
app.use(express.json())
//app.use(express.urlencoded({extended: true}))

//Enable all CORS Requests
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

//Index
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//Movies
app.use ('/movies', movieController)


app.listen(8080, () => {
    console.log('listening on port: ', 8080)
})

//Why is this here? Shouldnt this be in a model folder?
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
