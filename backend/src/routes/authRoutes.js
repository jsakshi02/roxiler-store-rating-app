const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("register works");
});

router.post("/login", (req, res) => {
  res.send("login works");
});

module.exports = router;