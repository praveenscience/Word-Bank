import React from "react";

const Word = ({ match }) => {
  return (
    <section className="Word">
      <h2>Word: {match.params.wordId}</h2>
    </section>
  );
};

export default Word;
