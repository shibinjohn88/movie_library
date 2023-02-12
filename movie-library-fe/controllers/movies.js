const express = require('express')
const movies = express.Router ()
const Movie = require('../models/movies.js')

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

module.exports = movies

