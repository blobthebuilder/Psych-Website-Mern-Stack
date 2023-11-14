const express = require("express");
const {
  getTotalUsers,
  incTotalUsers,
  setTotalUsers,
} = require("../controllers/dataController");

const router = express.Router();

router.get("/", getTotalUsers);

router.post("/", incTotalUsers);

router.post("/set/:newTotal", setTotalUsers);

module.exports = router;
