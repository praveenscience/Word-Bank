import React from "react";

const Word = ({ match }) => {
  return (
    <section className="Word">
      <h3>Word: {match.params.wordId}</h3>
    </section>
  );
};

export default Word;
