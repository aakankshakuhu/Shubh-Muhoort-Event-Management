// routes/rsvp.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define RSVP Schema & Model
const rsvpSchema = new mongoose.Schema({
  name: String,
  email: String,
  attendance: String,
});
const RSVP = mongoose.model("RSVP", rsvpSchema);

// POST - Save RSVP
router.post("/", async (req, res) => {
  try {
    const newRSVP = new RSVP(req.body);
    await newRSVP.save();
    res.json({ message: "🎉 RSVP saved successfully", rsvp: newRSVP });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Fetch all RSVPs
router.get("/", async (req, res) => {
  try {
    const rsvps = await RSVP.find();
    res.json(rsvps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
