import React, { useState, useEffect } from "react";
import "./Movies.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddEditMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [movieObj, setMovieObj] = useState({
    name: "",
    genres: "",
    image: "",
    premyear: "",
  });
  const [name, setName] = useState("");

  const loadMovie = async () => {
    const { data } = await axios.get(`http://localhost:3000/movies/${id}`);
    setMovieObj(data);
    setName(data.name);
  };
  useEffect(() => {
    if (id) {
      loadMovie();
    }
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const putMovie = await axios.put(`http://localhost:3000/movies/${id}`, movieObj);
      alert(putMovie.data);
    } else {
      const addMovie = await axios.post("http://localhost:3000/movies", movieObj);
      alert(addMovie.data);
    }
    navigate("/");
  };

  return (
    <div className="addEditMovie">
      <h2>{id ? `Edit Movie - ${name}` : "Add Movie"}</h2>
      <div className="buttonsAddEditMovie">
        <button onClick={() => navigate("/")}>All Movies</button>
        <button onClick={() => navigate("/AddEditMovie")}>Add Movie</button>
      </div>
      <br />
      <div className="formAddEditMovie">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input type="text" onChange={(e) => setMovieObj({ ...movieObj, name: e.target.value })} value={movieObj.name} required />
          </div>
          <div>
            <label>Genres: </label>
            <input type="text" onChange={(e) => setMovieObj({ ...movieObj, genres: e.target.value })} value={movieObj.genres} required />
          </div>
          <div>
            <label>Image URL: </label>
            <input type="text" onChange={(e) => setMovieObj({ ...movieObj, image: e.target.value })} value={movieObj.image} required />
          </div>
          <div>
            <label>Premiere Year: </label>
            <input type="date" onChange={(e) => setMovieObj({ ...movieObj, premyear: e.target.value })} value={movieObj.premyear} required />
          </div>
          <div className="formButtons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditMovie;
