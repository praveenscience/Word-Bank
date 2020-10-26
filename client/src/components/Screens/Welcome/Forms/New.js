import React, { useState } from "react";
import { CreateWord } from "../../../../services/Words";
import FormGroup from "../../../Bootstrap/Forms/FormGroup";

const NewWord = ({ history, UpdateWords }) => {
  const [Error, setError] = useState(false);
  const [Values, setValues] = useState({
    slug: "",
    Word: "",
    Meaning: "",
    Sentence: ""
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
    CreateWord(Values)
      .then(res => {
        if (res.status === 201) {
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
      <h3>Create a New Word</h3>
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
        <input
          type="submit"
          value="Create New Word"
          className="btn btn-primary"
        />
      </form>
    </section>
  );
};

export default NewWord;
