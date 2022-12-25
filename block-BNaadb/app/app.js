var express = require("express");
var mongoose = require("mongoose");

// Paths
var indexRoute = require("./routes/index");
var usersRoute = require("./routes/users");

// Database
mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "Connected True");
});

// Instantiate
var app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// // MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/", indexRoute);
app.use("/users", usersRoute);

// Server
app.listen(4000, () => {
  console.log(`Listening to port 4000`);
});
