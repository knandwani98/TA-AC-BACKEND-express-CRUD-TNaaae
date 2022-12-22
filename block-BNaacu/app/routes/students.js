var express = require("express");
var router = express.Router();

// Routes
routes.get("/new", (req, res) => {
  res.render("student-new-form");
});

module.exports = router;
