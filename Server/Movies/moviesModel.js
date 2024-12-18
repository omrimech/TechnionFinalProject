const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  name: String,
  premyear: String,
  genres: [String],
  image: String,
});

const moviesDB = mongoose.model("movies", moviesSchema, "movies");

module.exports = moviesDB;
