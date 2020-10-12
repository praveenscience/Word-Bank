import React from "react";
import Words from "../../../constants/DemoWords";

const Word = ({ match }) => {
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
