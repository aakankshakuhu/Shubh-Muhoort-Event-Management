const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // your user schema
require("dotenv").config();

// LOGIN + AUTO-SIGNUP
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password required" });
    }

    // check if user exists
    let user = await User.findOne({ username });

    if (!user) {
      // auto-register if not exists
      const hashedPassword = await bcrypt.hash(password, 10);

      user = new User({
        username: username,
        password: hashedPassword,
      });

      await user.save();
      return res.status(201).json({ message: "User registered and logged in", user });
    }

    // if user exists → validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token, user });

  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
