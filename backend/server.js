const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const Event = require("./models/Event");

// Middleware should come first
app.use(cors());
app.use(express.json()); // <-- parses JSON request body

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Backend + DB working 🚀");
});

// Route to add a new event
app.post("/addevent", async (req, res) => {
  try {
    const { name, date, location } = req.body;

    if (!name || !date || !location) {
      return res
        .status(400)
        .json({ error: "Please provide name, date, and location" });
    }

    const newEvent = new Event({ name, date, location });
    await newEvent.save();
    res.json({ message: "🎉 Event saved successfully", event: newEvent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
