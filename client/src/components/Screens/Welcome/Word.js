import React from "react";
import moment from "moment";

const Word = ({ match, Words }) => {
  const WordID = match.params.wordId;
  const Word = Words[WordID];
  if (Word)
    return (
      <section className="Word">
        <h3>
          Word: <strong>{WordID}</strong>
        </h3>
        <div className="alert alert-info mb-4">
          This word has been created by <em>{Word.User}</em> on{" "}
          <em>{moment(Word.DateCreated).format("MMMM Do YYYY, h:mm a")}</em>.
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
