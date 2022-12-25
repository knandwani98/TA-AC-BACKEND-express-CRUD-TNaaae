var express = require("express");
const { default: mongoose } = require("mongoose");
var router = express.Router();
var User = require("../models/users");

router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return err;
    res.render("allUsers", { users: users });
  });
});

router.get("/new", (req, res) => {
  res.render("newForm.ejs");
});

router.post("/", (req, res) => {
  User.create(req.body, (err, data) => {
    if (err) {
      res.redirect("/users/new");
    } else {
      res.redirect("/users");
    }
  });
});

router.get("/:id", (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return err;
    res.render("singleUser.ejs", { user: user });
  });
});

module.exports = router;