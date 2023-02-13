const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1/movie-library", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

console.log("completed connection")

module.exports.Movie = require('./movies')
module.exports.Review = require('./review')