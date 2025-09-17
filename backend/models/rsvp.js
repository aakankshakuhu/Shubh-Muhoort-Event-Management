const mongoose = require("mongoose");

const rsvpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  attendance: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  guests: {
    type: Number,
    default: 1,
    min: 1,
  },
  dietaryRequirements: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt
});

module.exports = mongoose.model("RSVP", rsvpSchema);
