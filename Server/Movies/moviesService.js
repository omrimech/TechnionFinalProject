const movies = require('./moviesModel');

// Get all Movies
const getAllMovies = () => {
    return movies.find({})
}

// Get a single movies 
const getMovieById = (id) => {
    let movie = movies.findById(id);
    return movie
};

// Post a new data
const AddMovie = (obj) => {
    const newMovie = new movies(obj);
    newMovie.save();
    return `New movie has been created : ${newMovie._id}`;
};

// PUT a data on ID 
const updateMovieById = async (id , obj) => {
    await movies.findByIdAndUpdate(id , obj);
    return 'Data has been updated !'
};

// Delete a movie by ID 
const deleteMovieById = async (id) => {
    await movies.findByIdAndDelete(id);
    return "Data has been deleted !"
};

module.exports =  { getAllMovies , getMovieById , AddMovie , updateMovieById , deleteMovieById };