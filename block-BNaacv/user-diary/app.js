var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/userdiary", (err) => {
  console.log(err ? err : `Connected MongoDB`);
});

// Instantiate
var app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// views
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

// Server
app.listen(4000, () => {
  console.log(`Listening to port 4000`);
});
