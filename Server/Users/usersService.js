const users = require('./usersModel');

// Get all Users : 
const getAllUsers = () => {
    return users.find({});
};

module.exports = { getAllUsers }