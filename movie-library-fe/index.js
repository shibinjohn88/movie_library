const express = require('express')
const app = express()
require('dotenv').config()
const movieController = require ('./controllers/movies.js')
const mongoose = require ('mongoose')
// MIDDLEWARE
app.use(express.json())
//app.use(express.urlencoded({extended: true}))


//Index
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//Movies
app.use ('/movies', movieController)


app.listen(process.env.PORT, () => {
    console.log('listening on port: ', process.env.PORT)
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
