var express = require("express");
var router = express.Router();
var User = require("../models/users");

router.get("/", (req, res) => {
  res.send("All Users");
});

router.get("/new", (req, res) => {
  res.render("newForm.ejs");
});

router.post("/", (req, res) => {
  User.create(req.body, (err, data) => {
    console.log(err, data);
    if (err) {
      res.redirect("/users/new");
    } else {
      res.redirect("/users");
    }
  });
});

module.exports = router;
