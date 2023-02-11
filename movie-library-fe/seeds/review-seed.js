const axios = require('axios');
const db = require('../models')
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'

async function seed() {
    const response = await db.Movie.find({})
    // console.log(response)
    await response.map(async (movie) => {
        const getReviews = await axios(`https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        // console.log(getReviews.data.results)
        await getReviews.data.results.map(async (reviews) => {
            const result = await db.Review.create({
                author: reviews.author,
                author_details: {
                    username: reviews.author_details.username,
                    rating: reviews.author_details.rating,
                }, 
                content: reviews.content,
            })
        })
    })
}

seed()