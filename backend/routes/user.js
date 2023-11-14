const express = require("express");
const { createEntry } = require("../controllers/userController");

const router = express.Router();

router.post("/", createEntry);

module.exports = router;
