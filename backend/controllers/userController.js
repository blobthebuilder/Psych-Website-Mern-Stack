const User = require("../models/userModel");
const mongoose = require("mongoose");

// create new user with their results
const createEntry = async (req, res) => {
  const { userId, orderOfAgents } = req.body;
  try {
    const newUser = await User.create({
      userId,
      orderOfAgents,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createEntry };
