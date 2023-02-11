const express = require('express')
const movies = express.Router()
// const Movie = require('../models/movies.js')
// const Comment = require('../models/comments')
const db = require('../models')
const { getMovieReviews } = require("../services/movie-services")

//Index Read movies from database 


//Create - Add movies to database
movies.post ('/', (req, res) => {
    Movie.create(req.body)
        .then ( data => {
            res.status(200).json(data)
        })
        .catch (error => {
            res.json (error)
        })
})


// Review - Add review to movies db -- working on routing still
movies.get('/:movie_id/review', async (req, res) => {
    console.log(req.params.movie_id)
    const result = await getMovieReviews(req.params.movie_id)
    res.send(result)
  })

// Edit - edit movie db -- working on routing still
movies.get('/:id/edit', (req, res) => {
    db.Place.findById({"_id": req.params.id})
    .then((movies) => {
      res.render('movies/edit', { movies })
    })
    .catch(err => {
      res.render('error404')
    })
  })

module.exports = movies

