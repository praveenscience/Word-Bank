import React from "react";

const Word = ({ match, Words }) => {
  if (Words[match.params.wordId])
    return (
      <section className="Word">
        <h3>Word: {match.params.wordId}</h3>
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
