const express = require('express')
const movies = express.Router()
// const Movie = require('../models/movies.js')
// const Comment = require('../models/comments')
const db = require('../models')
const { getMovieReviews } = require("../services/movie-services")

//Index Read movies from database 
movies.get ('/', (req, res) => {
    Movie.find ()
    .then ( data => {
        res.status(200).json(data)
    })
    .catch (err => {
        res.json(err)
    })
    
})

//Show specific movie detail
movies.get ('/:id', async (req, res) => {
    Movie.findById (req.params.id)
        .then (data => {
            res.status(200).json(data)
        })
        .catch (err => {
            res.json (err)
        })
})

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

//Delete Movie
movies.delete ('/:id', async (req, res) => {
    Movie.findByIdAndDelete (req.params.id)
        .then (data => {
            res.status (200).json ('Delete Successful')
        })
        .catch (err => {
            res.json (err)
        })
})

//Update book details
movies.put ('/:id', async (req, res) => {
    Movie.findByIdAndUpdate (req.params.id, req.body, {new: true})
        .then (data => {
            res.status (200).json (data)
        })
        .catch (err => {
            res.json (err)
        })
})

// REVIEW CRUD
// Review - Read reviews from db
movies.get('/:movie_id/review', async (req, res) => {
    console.log(req.params.movie_id)
    const result = await getMovieReviews(req.params.movie_id)
    res.send(result)
  })


// Edit - edit reviews db -- working on routing still use post route
movies.put('/:movie_id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then((movies) => {
      res.redirect(`movies/${req.params.movie_id}`, { movies })
    })
    .catch(err => {
      res.json(err)
    })
  })

// Delete reviews -- working on routes use delete route
movies.delete('/:review_id/review', async (req, res) => {
    db.Review.findByIdAndDelete({"_id": req.params.review_id})
    .then(() => {
        res.status (200).json ('Delete Successful')
    })
    .catch(err => {
        res.json (err)
    })
  })

module.exports = movies

