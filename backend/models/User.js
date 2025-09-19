const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // login with this
  password: { type: String, required: true },
  // remove email if not using it
});

module.exports = mongoose.model("User", userSchema);
