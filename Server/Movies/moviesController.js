const express = require("express");
const moviesServ = require("./moviesService");

const router = express.Router();

// Get
router.get("/", async (req, res) => {
  const movies = await moviesServ.getAllMovies();
  res.send(movies);
});

// Get by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await moviesServ.getMovieById(id);
  res.send(movie);
});

// Post
router.post("/", async (req, res) => {
  const movieObj = req.body;
  const newMovie = await moviesServ.AddMovie(movieObj);
  res.send(newMovie);
});

// PUT
router.put("/:id", async (req, res) => {
  const movieObj = req.body;
  const id = req.params.id;
  const moviePut = await moviesServ.updateMovieById(id, movieObj);
  res.send(moviePut);
});

// Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const movieDel = await moviesServ.deleteMovieById(id);
  res.send(movieDel);
});

module.exports = router;
