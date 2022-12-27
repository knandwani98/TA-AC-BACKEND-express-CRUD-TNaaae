var express = require("express");
var mongoose = require("mongoose");

var indexRoute = require("./routes/index");
var usersRoute = require("./routes/users");

mongoose.connect("mongodb://localhost/user-diary-3", (err) => {
  console.log(err ? err : "Connected to Mongoose");
});

// Instantiate
var app = express();

// Middlewares

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/", indexRoute);
app.use("/users", usersRoute);

// 404
app.use((req, res, next) => {
  res.render("err.ejs");
});

app.use((err, req, res, next) => {
  res.render("cxErr.ejs");
});

// server
app.listen(4444, () => {
  console.log(`Listening to port 4444`);
});
