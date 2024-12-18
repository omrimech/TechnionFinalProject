const express = require('express');
const subsServ = require('./subsService');

const router = express.Router();

// Get All
router.get('/' , async (req,res) => {
    const subs = await subsServ.getAllSubs();
    res.send(subs);
});

// Get by ID 
router.get('/:id',async (req,res) => {
    const id = req.params.id
    const sub = await subsServ.getSubById(id);
    res.send(sub);
})

// Post
router.post('/' , async (req,res) => {
    const subObj = req.body;
    const newSub = await subsServ.addSub(subObj);
    res.send(newSub)
});

// Put
router.put('/:id' , async (req,res) => {
    const subObj = req.body
    const id = req.params.id
    const putSub = await subsServ.updateSubById(id , subObj);
    res.send(putSub);
});

// Delete 
router.delete('/:id' ,async (req,res) => {
    const id = req.params.id;
    const deleteSub = await subsServ.deleteSubById(id);
    res.send(deleteSub)
});

module.exports = router