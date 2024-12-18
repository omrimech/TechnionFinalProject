const express = require("express");
const membersServ = require("./membersService");

const router = express.Router();

// Get
router.get("/", async (req, res) => {
  const members = await membersServ.getAllMembers();
  res.send(members);
});

// Get by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const member = await membersServ.getMemberById(id);
  res.send(member);
});

// Post
router.post("/", async (req, res) => {
  const memberObj = req.body;
  const newMember = await membersServ.addMember(memberObj);
  res.send(newMember);
});

// Put
router.put("/:id", async (req, res) => {
  const memberObj = req.body;
  const id = req.params.id;
  const memberPut = await membersServ.updateMemberById(id, memberObj);
  res.send(memberPut);
});

// Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const memberDel = await membersServ.deleteMemberById(id);
  res.send(memberDel);
});

module.exports = router;
