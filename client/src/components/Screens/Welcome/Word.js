import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { DeleteWord } from "../../../services/Words";

const Word = ({ match, Words, User, UpdateWords }) => {
  const [DeleteMode, setDeleteMode] = useState(false);
  const [Deleted, setDeleted] = useState(false);
  const WordID = match.params.wordId;
  const Word = Words[WordID];
  useEffect(() => {
    if (Deleted) {
      UpdateWords();
    }
    setDeleteMode(false);
    setDeleted(false);
  }, [WordID]);
  const handleDelete = e => {
    e.preventDefault();
    setDeleteMode(!DeleteMode);
  };
  const handleReallyDelete = e => {
    e.preventDefault();
    DeleteWord(WordID).then(() => {
      setDeleted(true);
    });
  };
  const handleGoHome = () => {
    UpdateWords();
  };
  if (Word)
    return (
      <section className="Word">
        <h3>
          Word: <strong>{WordID}</strong>
          {Word.User === User.username && (
            <span className="btn-group float-right">
              <Link
                to={`/word/${WordID}/edit`}
                className="btn btn-sm btn-primary"
              >
                Edit
              </Link>
              <button className="btn btn-sm btn-danger" onClick={handleDelete}>
                {DeleteMode ? "Cancel" : "Delete"}
              </button>
            </span>
          )}
        </h3>
        {Deleted ? (
          <div className="alert alert-success text-center">
            <p>
              The word <strong>{Word.Word}</strong> has been deleted.
            </p>
            <Link
              to="/"
              className="btn btn-success mr-3"
              onClick={handleGoHome}
            >
              Back to Home
            </Link>
          </div>
        ) : DeleteMode && Word.User === User.username ? (
          <div className="alert alert-danger text-center">
            <p>
              Are you sure, you want to delete the word{" "}
              <strong>{Word.Word}</strong>?
            </p>
            <button
              className="btn btn-danger mr-3"
              onClick={handleReallyDelete}
            >
              Yes, I am sure.
            </button>
            <button className="btn btn-info btn-sm" onClick={handleDelete}>
              No, take me back.
            </button>
          </div>
        ) : (
          <>
            <div className="alert alert-info mb-4">
              This word has been created by <em>{Word.User}</em> on{" "}
              <em>{moment(Word.DateCreated).format("MMMM Do YYYY, h:mm a")}</em>
              .
            </div>
            <h4>Word</h4>
            <p>
              The current word we are learning is <strong>{Word.Word}</strong>.
            </p>
            <h4>Meaning</h4>
            <p>{Word.Meaning}</p>
            <h4>Example</h4>
            <p>
              <em>{Word.Sentence}</em>
            </p>
          </>
        )}
      </section>
    );
  else
    return (
      <section className="Word">
        <h3>Error 404! Word Not Found</h3>
      </section>
    );
};

export default Word;
