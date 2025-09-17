const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  attendance: String,
  guests: String,
  dietaryRequirements: String,
  message: String,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Event", EventSchema);

