var express = require("express");
var mongoose = require("mongoose");

// var indexRoute = require("./routes/index");
var usersRoute = require("./routes/users");

// connected database to server
mongoose.connect("mongodb://localhost/user-diary-2", (err) => {
  console.log(err ? err : "Connected True");
});

// Instaniate the express
var app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Handeling routes
// app.use("/", indexRoute);
app.use("/users", usersRoute);

// Handeling 404
app.use((req, res) => {
  res.render("err.ejs");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.render("cxErr.ejs");
});

// Server Port 4000
app.listen(3333, () => {
  console.log(`Listening to port 3333`);
});
