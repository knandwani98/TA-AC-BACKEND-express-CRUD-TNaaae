var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views/index");

app.listen(4000, () => {
  console.log(`Listening to port 4000`);
});
