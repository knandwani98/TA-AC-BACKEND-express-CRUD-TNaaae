var express = require("express");
var route = express.Router();

route.get("/", (req, res) => {
  res.redirect("/users");
});

module.exports = route;
