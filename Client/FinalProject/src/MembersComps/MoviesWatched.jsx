import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MoviesWatched = ({ member }) => {
  const [movies, setMovies] = useState([]);
  const [subs, setSubs] = useState([]);

  const loadAllMoviesAndSubs = async () => {
    const movies = await axios.get("http://localhost:3000/movies");
    const subs = await axios.get("http://localhost:3000/subs");
    setMovies(movies.data);
    setSubs(subs.data);
  };

  useEffect(() => {
    loadAllMoviesAndSubs();
  }, []);

  const [moviesForThisSub, setMoviesForThisSub] = useState([]);
  const [showSubDiv, setShowSubDiv] = useState(false);

  const [subToNewMovie, setSubToNewMovie] = useState({
    movieID: "",
    MemberID: member._id,
    date: "",
  });

  useEffect(() => {
    const relevantSubs = subs.filter((sub) => sub.MemberID === member._id);
    const moviesThisSubWatched = relevantSubs
      .map((sub) => {
        const movie = movies.find((movie) => movie._id === sub.movieID);
        return movie ? { ...movie, dateWatched: sub.date } : null;
      })
      .filter((movie) => movie !== null);

    setMoviesForThisSub(moviesThisSubWatched);
    console.log(moviesThisSubWatched);
  }, [movies, subs, member._id]);

  const subscribe = async () => {
    if (subToNewMovie.movieID == "") {
      return alert("Select a movie");
    } else if (subToNewMovie.date == "") {
      return alert("Select a date");
    }

    const { data } = await axios.post(`http://localhost:3000/subs`, subToNewMovie);
    console.log(data);
    setShowSubDiv(!showSubDiv);
    loadAllMoviesAndSubs();
  };

  return (
    <div className="moviesWacthed">
      <h4>Movies Watched</h4>
      <button onClick={() => setShowSubDiv(!showSubDiv)}>Subscirbe to new movie</button>
      {showSubDiv && (
        <div className="assignMovie">
          <br />
          Add a new movie
          <br />
          <select onChange={(e) => setSubToNewMovie({ ...subToNewMovie, movieID: e.target.value })} defaultValue={""}>
            <option value=""></option>
            {movies.map((item) => {
              return <option value={item._id}>{item.name}</option>;
            })}
          </select>
          <input onChange={(e) => setSubToNewMovie({ ...subToNewMovie, date: e.target.value })} type="date" />
          <br />
          <button onClick={subscribe}>Subscribe</button>
        </div>
      )}
      <ul>
        {moviesForThisSub.map((item) => (
          <li key={item._id}>
            <Link to={`/AddEditMovie/${item._id}`}>{item.name}</Link> , {item.dateWatched}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesWatched;
