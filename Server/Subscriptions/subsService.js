const subs = require("./subsModel");

// Get
const getAllSubs = () => {
  return subs.find({});
};

// Get by ID
const getSubById = (id) => {
  return subs.findById(id);
};

// Post
const addSub = (obj) => {
  const newSub = new subs(obj);
  newSub.save();
  return `New movie has been created : ${newSub._id}`;
};

// Put
const updateSubById = async (id, obj) => {
  await subs.findByIdAndUpdate(id, obj);
  return "Data has been updated !";
};

// Delete
const deleteSubById = async (id) => {
  await subs.findByIdAndDelete(id);
  return "Data has been deleted !";
};

module.exports = { getAllSubs , getSubById , addSub , updateSubById , deleteSubById }
