const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const Event = require("./models/Event"); // Import the Event model

// ✅ Middleware
app.use(express.json());

// ✅ Fix CORS to match your frontend (http://localhost:8080)
app.use(cors({
    origin: "http://localhost:8080",  // allow frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

// ✅ Routes
const rsvpRoutes = require("./routes/rsvp");
const authRoutes = require("./routes/auth"); 
app.use("/api/rsvp", rsvpRoutes);
app.use("/api/auth", authRoutes); 

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("✅ MongoDB Connected");

    try {
      // Drop the old email index if it exists
      await mongoose.connection.db.collection("users").dropIndex("email_1");
      console.log("🗑️ Dropped email_1 index");
    } catch (err) {
      if (err.codeName === "IndexNotFound") {
        console.log("ℹ️ email_1 index not found, skipping...");
      } else {
        console.error("⚠️ Error dropping index:", err);
      }
    }
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));


// ✅ POST route to save Events
app.post("/addevent", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.json({ message: "🎉 Event saved successfully", event: newEvent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
