var express = require("express");
var route = express.Router();
var User = require("../models/userSchema");

route.get("/", (req, res, next) => {
  User.find({}, (err, data) => {
    if (err) return next(err);
    res.render("allUsers.ejs", { data: data });
  });
});

route.get("/new", (req, res) => {
  res.render("newUser.ejs");
});

route.post("/", (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) return next(err);
    var id = data._id;
    res.redirect(`/users/${id}`);
  });
});

route.get("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser.ejs", { user });
  });
});

route.get("/:id/edit", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("editUser.ejs", { user });
  });
});

route.post("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, data) => {
    if (err) return next(err);
    console.log("updated");
    res.redirect(`/users/${id}`);
  });
});

route.get("/:id/delete", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    console.log(`User: ${user.name} Deleted`);
    res.redirect("/users");
  });
});

module.exports = route;
