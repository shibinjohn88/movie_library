const db = require('../models')
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'

async function getMovieReviews(movie_id) {
    const response = await db.Review.find({
        movie_id: movie_id,
    })
    return response
}

module.exports = {
    getMovieReviews: getMovieReviews
}