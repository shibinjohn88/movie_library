const mongoose = require('mongoose')

let reviewSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    review: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('Review', reviewSchema)