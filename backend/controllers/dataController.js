const Data = require("../models/dataModel");
const mongoose = require("mongoose");

// get last previous user id
const getTotalUsers = async (req, res) => {
  try {
    const data = await Data.find({ dataId: 1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured" });
  }
};

const incTotalUsers = async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { $inc: { totalUsers: 1 } },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};

const setTotalUsers = async (req, res) => {
  const { newTotal } = req.params;
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { totalUsers: newTotal },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};
module.exports = {
  getTotalUsers,
  incTotalUsers,
  setTotalUsers,
};
