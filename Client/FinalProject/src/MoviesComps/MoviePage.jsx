import React from "react";
import SubsWatched from "./SubsWatched";
import "./Movies.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MoviePage = ({ movie, loadMovieFunc }) => {
  const navigate = useNavigate();
  const moveToEdit = () => {
    navigate(`/AddEditMovie/${movie._id}`);
  };

  const deleteMovieAndSubs = async () => {
    const subs = await axios.get("http://localhost:3000/subs");
    const filteredSubs = subs.data.filter((sub) => sub.movieID == movie._id)
    console.log(filteredSubs)
    for(let i = 0 ; i < filteredSubs.length ; i++){
      const deleteSub = await axios.delete(`http://localhost:3000/subs/${filteredSubs[i]._id}`)
    }
    deleteMovie()
  }

  const deleteMovie = async () => {
    if (movie._id) {
      const delMovie = await axios.delete(`http://localhost:3000/movies/${movie._id}`);
      alert(delMovie.data);
      loadMovieFunc();
    }
  };

  
  return (
    <div className="movie-container">
      <div className="movie-top">
        {movie.name}, {movie.premyear}
      </div>
      <br />
      <div className="movie-mid">
        <img src={movie.image} style={{ width: "20%" }} />
        <SubsWatched movie={movie} />
      </div>
      <br />
      <div className="movie-bot">
        <button onClick={moveToEdit}>Edit</button> <button onClick={deleteMovieAndSubs}>Delete</button>
      </div>
    </div>
  );
};

export default MoviePage;
