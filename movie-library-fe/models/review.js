const mongoose = require('mongoose')

let reviewSchema = new mongoose.Schema({
    id: { type: String },
    movie_id: { type: String },
    author: { type: String },
    author_details: { 
        username: { type: String },
        rating: { type: String }
     },
    content: { type: String },
})
  
module.exports = mongoose.model('Review', reviewSchema)