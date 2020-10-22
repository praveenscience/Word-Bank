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
        <div className="alert alert-info">
          This word has been created by <em>{Word.User}</em> on{" "}
          <em>{moment(Word.DateCreated).format("MMMM Do YYYY, h:mm a")}</em>.
        </div>
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
