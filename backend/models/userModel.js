const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    default: 0,
  },
  orderOfAgents: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("user", userSchema);
