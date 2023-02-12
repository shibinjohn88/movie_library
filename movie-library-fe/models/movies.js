const mongoose = require ('mongoose')

//schema for mongodb

const movieSchema = new mongoose.Schema({
    movie_id: {type: Number },
    original_title: { type: String, required: true, unique: true },
    poster_path: {type: String},
    overwiew: {type: String },
    release_date: {type: String },
    original_language: {type: String },
    review: {type: String},
    rating: {type: Number},
    genres: {type: Array},
    video: {type: Boolean},
    cast: [{
        type: Schema.Types.ObjectId,
        ref: "Actor"
        }]
        });

module.exports = mongoose.model('Movie', movieSchema)

