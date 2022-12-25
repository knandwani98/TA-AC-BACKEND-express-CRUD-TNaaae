var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: String,
    age: Number,
    gender: String,
    bio: String,
    city: String,
    state: String,
    country: String,
    pincode: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
