// Import Express JS.
const express = require("express");
// Import Express Routes
const words = express.Router();

const Words = {
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
};

// Adding Routes.
words.get("/", (req, res) => {
  res.json(Words);
});
words.get("/:wordId", (req, res) => {
  if (Words[req.params.wordId]) {
    res.json({
      ...Words[req.params.wordId],
      slug: req.params.wordId,
      qs: req.query,
      Error: false
    });
  } else {
    res.status(404).json({
      slug: req.params.wordId,
      qs: req.query,
      Error: true,
      ErrorMessage: "Word Not Found!"
    });
  }
});

module.exports = words;
