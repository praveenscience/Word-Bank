// Import Express JS.
const express = require("express");
// Import Express Routes
const users = express.Router();

const Users = {
  Praveen: { email: "", fullname: "Praveen Kumar", password: "Hello@123" },
  AbhiVikrant: { email: "", fullname: "Abhishek Vikrant", password: "1234@123" },
  Santosh: { email: "", fullname: "Santosh", password: "12345" },
  Ruchita: { email: "", fullname: "Ruchita", password: "Carol@123" },
  Princy: { email: "", fullname: "Princy Agarwal", password: "passw" },
  Nagaraj: { email: "", fullname: "Nagaraj", password: "nagsvk123" },
  angle: { email: "", fullname: "Obtuse Angle", password: "hello@12" }
};

// Adding Routes.
users.get("/", (req, res) => {
  res.status(403).json("You can't see the users! Nananana!");
});
users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    if (Users[username] && Users[username].password === password) {
      req.session.User = { ...Users[username], username };
      delete req.session.User.password;
      res.json({
        User: req.session.User,
        Error: false,
        Message: "Successfully authenticated as " + Users[username].fullname + "."
      });
    } else if (!Users[username]) {
      res.status(404).json({
        Error: true,
        ErrorMessage: "User not found!"
      });
    } else {
      res.status(403).json({
        Error: true,
        ErrorMessage: "Invalid Username or Password!"
      });
    }
  } else {
    res.status(400).json({
      Error: true,
      ErrorMessage: "You should give both username and password!"
    });
  }
});
module.exports = users;
