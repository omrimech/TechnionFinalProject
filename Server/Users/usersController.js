const express = require('express');
const userServ = require('./usersService');
const router = express.Router();

// Get All USERS :
router.get('/',async (req,res) => {
    const users = await userServ.getAllUsers();
    res.send(users);
})

module.exports = router