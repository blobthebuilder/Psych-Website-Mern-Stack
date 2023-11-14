const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  totalUsers: {
    type: Number,
    required: true,
    default: 0,
  },
  dataId: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("data", dataSchema);
