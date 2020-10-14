// Import Express JS.
const express = require("express");
// Import Express Routes
const app = express.Router();

// Serve Static Stuff.
app.use("/", express.static("static"));
// Adding Routes.
app.get("/", (req, res) => {
  res.json("Here's WordBank API Server!");
});

module.exports = app;
