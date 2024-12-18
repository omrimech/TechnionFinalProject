const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName : String,
    username : String,
    password : String
})

const usersDB = mongoose.model('users' , userSchema , "users");

module.exports = usersDB;
