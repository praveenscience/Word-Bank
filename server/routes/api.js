// Import Express JS.
const express = require("express");
// Import API Routes
const words = require("./api/words");
const users = require("./api/users");
// Import Express Routes
const api = express.Router();

// Adding Routes.
api.get("/", (req, res) => {
  res.json("Here's WordBank API Endpoint!");
});
// Words API
api.use("/words", words);
api.use("/users", users);

module.exports = api;
