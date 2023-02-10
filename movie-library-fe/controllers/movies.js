const express = require('express')
const movies = express.Router ()
const Movie = require('../models/movies.js')

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


module.exports = movies

