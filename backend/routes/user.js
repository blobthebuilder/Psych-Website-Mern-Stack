const express = require("express");
const { createEntry, getAll } = require("../controllers/userController");

const router = express.Router();

router.post("/", createEntry);

router.get("/", getAll);

module.exports = router;
