const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
  country: String,
  email: String,
  password: String
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel