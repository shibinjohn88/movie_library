//Make calls to the api using fetch
//using mongoose, map over the data that comes from the fetch and save it to your local db

const axios = require('axios');
const db = require('../models')
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'

async function seed() {
    const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    await response.data.results.map(async (movie) => {
        const result = await db.Movie.create({
            movie_id: movie.id,
            original_title: movie.original_title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            original_language: movie.original_language,
            review: movie.review,
            rating: movie.rating
        })
    })
}

seed()