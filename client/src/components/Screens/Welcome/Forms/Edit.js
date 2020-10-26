import React, { useState } from "react";
import { UpdateWord } from "../../../../services/Words";
import FormGroup from "../../../Bootstrap/Forms/FormGroup";

const EditWord = ({ history, match, UpdateWords, Words }) => {
  const [Error, setError] = useState(false);
  const Word = Words[match.params.wordId];
  const [Values, setValues] = useState({
    slug: match.params.wordId,
    Word: Word.Word,
    Meaning: Word.Meaning,
    Sentence: Word.Sentence
  });
  const sluggify = word =>
    word
      .toLowerCase()
      .replace(/[\s!"|',#$%^&*()+]/g, "-")
      .split("-")
      .filter(a => a)
      .join("-");
  const onInputChange = e => {
    setValues({
      ...Values,
      [e.target.name]: e.target.value,
      slug: e.target.name === "Word" ? sluggify(e.target.value) : Values.slug
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    UpdateWord(Values)
      .then(res => {
        if (res.status === 202) {
          UpdateWords();
          history.push("/word/" + Values.slug);
        }
      })
      .catch(err => {
        setError(err.response.data.ErrorMessage);
      });
  };
  return (
    <section className="Word">
      <h3>Update Word: {Word.Word}</h3>
      <p>Use the below form to create a new word.</p>
      <form onSubmit={handleSubmit}>
        {Error && <div className="alert alert-danger">{Error}</div>}
        {["slug", "Word", "Meaning", "Sentence"].map((fg, key) => (
          <FormGroup
            key={key}
            ID={fg}
            ReadOnly={fg === "slug"}
            Label={fg}
            Type="text"
            Value={Values[fg]}
            Placeholder={"Please enter the " + fg.toLowerCase() + "."}
            onChange={onInputChange}
          />
        ))}
        <input type="submit" value="Update Word" className="btn btn-primary" />
      </form>
    </section>
  );
};

export default EditWord;
