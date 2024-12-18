const mongoose = require('mongoose');

const membersSchema = new mongoose.Schema({
    name : String,
    email : String,
    city : String,
});

const membersDB = mongoose.model('members', membersSchema , 'members');

module.exports = membersDB;