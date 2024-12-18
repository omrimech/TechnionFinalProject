import React from "react";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import MoviePage from "./MoviePage";
import { useNavigate } from "react-router-dom";

const MoviesPage = () => {
  const loadAllMovies = async () => {
    const { data } = await axios.get("http://localhost:3000/movies");
    setLoadedMovies(data);
    setFilteredMovies(data);
  };

  useEffect(() => {
    loadAllMovies();
  }, []);

  const [loadedMovies, setLoadedMovies] = useState([]);
  const navigate = useNavigate();
  const [movieName, setMovieName] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(loadedMovies);

  // Search Movie Function
  const searchMovie = () => {
    const allMovies = loadedMovies.filter((item) => item.name.toLowerCase().includes(movieName));
    setFilteredMovies(allMovies);
  };

  return (
    <div className="MoviesPages">
      <h2>MoviesPage</h2>
      <br />
      <br />
      <button onClick={() => navigate("/")}>All Movies</button>
      <button onClick={() => navigate("/AddEditMovie")}>Add Movie</button>
      Find Movie : <input onChange={(e) => setMovieName(e.target.value.toLowerCase())} type="text" /> <button onClick={searchMovie}>Find</button>
      <br />
      <br />
      {filteredMovies.map((item) => {
        return <MoviePage key={item._id} movie={item} loadMovieFunc={loadAllMovies} />;
      })}
    </div>
  );
};

export default MoviesPage;
