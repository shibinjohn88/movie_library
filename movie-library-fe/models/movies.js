const mongoose = require ('mongoose')
const { Schema } = mongoose

//schema for mongodb

const movieSchema = new Schema ( {
    original_title: { type: String, required: true },
    poster_path: {type: String},
    overwiew: {type: String },
    release_date: {type: String },
    original_language: {type: String },
    review: {type: String},
    rating: {type: Number},
    genres: {type: Array},
    video: {type: Boolean},
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie

