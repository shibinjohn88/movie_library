const express = require('express')
const movies = express.Router ()
// const Movie = require('../models/movies.js')
// const Comment = require('../models/comments')
const db = require('../models')

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
movies.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
          console.log(comment)
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
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

