const members = require("./membersModel");

// Get all
const getAllMembers = () => {
  return members.find({});
};

// Get by ID
const getMemberById = (id) => {
  return members.findById(id);
};

// Post
const addMember = (obj) => {
  const newMember = new members(obj);
  newMember.save();
  return `New movie has been created : ${newMember._id}`;
};

// Put
const updateMemberById = async (id, obj) => {
  await members.findByIdAndUpdate(id, obj);
  return "Data has been updated !";
};

// Delete
const deleteMemberById = async (id) => {
  await members.findByIdAndDelete(id);
  return "Data has been deleted !";
};

module.exports = { getAllMembers, getMemberById, addMember, updateMemberById, deleteMemberById };
