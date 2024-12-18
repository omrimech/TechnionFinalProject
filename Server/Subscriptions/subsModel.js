const mongoose = require("mongoose");

const subsSchema = new mongoose.Schema({
    movieID : String,
    MemberID : String,
    date : String
});

const MemberDB = mongoose.model('subs' , subsSchema , 'subs');

module.exports = MemberDB