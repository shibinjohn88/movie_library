const express = require('express')
const app = express()
require('dotenv').config()
const movieController = require ('./controllers/movies.js')
const mongoose = require ('mongoose')
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser');


// MIDDLEWARE
app.use(express.json())
//app.use(express.urlencoded({extended: true}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Enable all CORS Requests
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

//Index
app.get('/api', (req, res) => {
    res.send('Hello world!')
})

//Movies
app.use ('/api/movies', movieController)


app.listen(process.env.PORT, () => {
    console.log('listening on port: ', process.env.PORT)
})

app.get('/main/s/:searchTerm', async (req, res) => {
  // searches by search term, feed itunes artistId into params
  let response = await axios.get(`http://www.omdbapi.com/?s=${req.params.searchTerm}&apikey=1269f85b`)
  res.status(200).send(response.data)
})

app.get('/main/i/:searchTerm', async (req, res) => {
  // searches by search term, feed itunes artistId into params
  let response = await axios.get(`http://www.omdbapi.com/?i=${req.params.searchTerm}&apikey=1269f85b`)
  res.status(200).send(response.data)
})

//Add searchmovies favorites to database
app.post('/post', async (req, res) => { 
  console.log(req.body)  
  // Favorites.create(req.body)
  //     .then ( data => {
          res.status(200).json(data)
         res.send('Movies')
      // })
      // .catch (error => {
      //     console.log(error)
      //     res.render ('error 400')
      // })
    
})



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
