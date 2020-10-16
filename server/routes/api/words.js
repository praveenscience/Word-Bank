// Import Express JS.
const express = require("express");
// Import Express Routes
const words = express.Router();

const Words = {
  hello: {
    Word: "Hello",
    Meaning: "Used as a greeting or to begin a telephone conversation.",
    Sentence: "Hello there, LetsGrad!",
    User: "Praveen",
    DateCreated: new Date()
  },
  world: {
    Word: "World",
    Meaning: "The earth, together with all of its countries and peoples.",
    Sentence: "He was doing his bit to save the world",
    User: "Praveen",
    DateCreated: new Date()
  }
};

// Adding Routes.
words.get("/", (req, res) => {
  res.json({
    Error: false,
    Message: Words
  });
});
words.get("/me", (req, res) => {
  if (!req.session.User) {
    res.status(403).json({
      Error: true,
      ErrorMessage: "Not authorised."
    });
  } else {
    const UserWords = {};
    Object.keys(Words).forEach(word => {
      if (Words[word].User === req.session.User.username) {
        UserWords[word] = Words[word];
      }
    });
    res.json({
      Error: false,
      Message: UserWords
    });
  }
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
words.post("/", (req, res) => {
  if (!req.session.User) {
    res.status(403).json({
      Error: true,
      ErrorMessage: "Not authorised."
    });
  } else {
    const { slug, Word, Meaning, Sentence } = req.body;
    if (slug && Word && Meaning && Sentence) {
      if (!Words[slug] && slug !== "me") {
        Words[slug] = {
          Word,
          Meaning,
          Sentence,
          User: req.session.User.username,
          DateCreated: new Date()
        };
        res.status(201).json({
          Error: false,
          Message: "Created new word " + slug + "."
        });
      } else {
        res.status(409).json({
          Error: true,
          ErrorMessage: "Word already exists."
        });
      }
    } else {
      res.status(400).json({
        Error: true,
        ErrorMessage:
          "You should give all the values of slug, Word, Meaning, Sentence!"
      });
    }
  }
});
words.put("/:wordId", (req, res) => {
  if (!req.session.User) {
    res.status(403).json({
      Error: true,
      ErrorMessage: "Not authorised."
    });
  } else {
    const { slug, Word, Meaning, Sentence } = req.body;
    const { wordId } = req.params;
    if (slug && Word && Meaning && Sentence && wordId) {
      if (
        Words[wordId] &&
        wordId !== "me" &&
        slug !== "me" &&
        Words[wordId].User === req.session.User.username
      ) {
        Words[wordId] = {
          Word,
          Meaning,
          Sentence,
          User: req.session.User.username,
          DateCreated: Words[wordId].DateCreated
        };
        if (slug !== wordId) {
          res.status(201).json({
            Error: false,
            Message: "Created new word " + slug + "."
          });
        } else {
          res.status(202).json({
            Error: false,
            Message: "Updated word " + slug + "."
          });
        }
      } else if (Words[wordId].User !== req.session.User.username) {
        res.status(403).json({
          Error: true,
          ErrorMessage: "Cannot edit other's word."
        });
      } else if (!Words[wordId]) {
        res.status(404).json({
          Error: true,
          ErrorMessage: "Word not found."
        });
      } else {
        res.status(403).json({
          Error: true,
          ErrorMessage: "Cannot edit the word."
        });
      }
    } else {
      res.status(400).json({
        Error: true,
        ErrorMessage:
          "You should give all the values of slug, Word, Meaning, Sentence!"
      });
    }
  }
});

module.exports = words;
