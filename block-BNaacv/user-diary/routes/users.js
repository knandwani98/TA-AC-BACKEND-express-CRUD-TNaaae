var express = require("express");
var router = express.Router();

// routes

router.get("/", (req, res) => {
  res.render("allusers");
});

router.get("/new", (req, res) => {
  res.render("newUser");
});

router.post("/", (req, res) => {
  res.send(`User Added Successfully ${req.body}`);
});

router.get("/:id", (req, res) => {
  let user = req.params.id;
  res.render("singleUser", { user: user });
});

router.delete("/delete/:id", (req, res) => {
  res.send(`User Deleted Successfully`);
});

router.put("/edit/:id", (req, res) => {
  res.send(`User Edit Successfully`);
});

module.exports = router;
