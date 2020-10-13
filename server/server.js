// Import Express JS.
const express = require("express");
// Create an Express Instance.
const app = express();
// Set a port.
const port = 3100;
// Serve Static Stuff.
app.use("/", express.static("static"));
// Adding Routes.
app.get("/", (req, res) => {
  res.json("Here's WordBank API!");
});
app.get("/api/words", (req, res) => {
  res.json({
    hello: {
      Word: "Hello",
      Meaning: "Used as a greeting or to begin a telephone conversation.",
      Sentence: "Hello there, LetsGrad!",
      User: ""
    },
    world: {
      Word: "World",
      Meaning: "The earth, together with all of its countries and peoples.",
      Sentence: "He was doing his bit to save the world",
      User: ""
    }
  });
});
// Listen the application to the port.
app.listen(port, () => {
  console.log(`Server started in Port ${port}!`);
});
