var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("allUsers.ejs", { users });
  });
});

router.get("/new", (req, res, next) => {
  res.render("newUserForm.ejs");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser.ejs", { user });
  });
});

router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, user) => {
    if (err) return next(err);
    res.redirect(`/users/${id}`);
  });
});

router.delete("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.redirect(`/users/${id}`);
  });
});

module.exports = router;
