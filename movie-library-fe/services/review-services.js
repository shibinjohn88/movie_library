const db = require('../models')

async function findMovieReview(review_id) {
    const response = await db.Review.findOne({
        _id: review_id,
    })
    return response
}

module.exports = {
    findMovieReview: findMovieReview
}