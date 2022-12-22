var express = require("express");
var mongoose = require("mongoose");

// Mongoose
mongoose.connect("mongodb://localhost/school", (err) => {
  console.log(err ? err : "Connected MongoDB True");
});

//
var app = express();

// View engines
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Middleware
app.use(express.json());

// routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/students"));

// Server
app.listen(4000, () => {
  console.log(`Listening to port 4000`);
});
