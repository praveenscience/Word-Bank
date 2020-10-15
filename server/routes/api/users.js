// Import Express JS.
const express = require("express");
// Import Express Routes
const users = express.Router();

// Read the body for post.
users.use(express.json());

const Users = {
  Praveen: { email: "", fullname: "", password: "Hello@123" },
  AbhiVikrant: { email: "", fullname: "", password: "1234@123" },
  Santosh: { email: "", fullname: "", password: "12345" },
  Ruchita: { email: "", fullname: "", password: "Carol@123" },
  Princy: { email: "", fullname: "", password: "passw" },
  Nagaraj: { email: "", fullname: "", password: "nagsvk123" },
  angle: { email: "", fullname: "", password: "hello@12" }
};

// Adding Routes.
users.get("/", (req, res) => {
  res.status(403).json("You can't see the users! Nananana!");
});
users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    if (Users[username] && Users[username].password === password) {
      res.json(
        "Successfully authenticated as " + Users[username].fullname + "."
      );
    } else if (!Users[username]) {
      res.status(404).json("User not found!");
    } else {
      res.status(403).json("Invalid Username or Password!");
    }
  } else {
    res.status(400).json("You should give both username and password!");
  }
});
module.exports = users;
