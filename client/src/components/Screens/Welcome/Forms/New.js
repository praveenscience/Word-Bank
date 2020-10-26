import React, { useState } from "react";
import { CreateWord } from "../../../../services/Words";
import FormGroup from "../../../Bootstrap/Forms/FormGroup";

const NewWord = () => {
  const [Error, setError] = useState(false);
  const [Values, setValues] = useState({
    Slug: "",
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
      Slug: e.target.name === "Word" ? sluggify(e.target.value) : Values.Slug
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    CreateWord(Values).then(res => {
      console.log(res);
    });
  };
  return (
    <section className="Word">
      <h3>Create a New Word</h3>
      <p>Use the below form to create a new word.</p>
      <form onSubmit={handleSubmit}>
        {Error && <div className="alert alert-danger">{Values.Error}</div>}
        {["Slug", "Word", "Meaning", "Sentence"].map((fg, key) => (
          <FormGroup
            key={key}
            ID={fg}
            ReadOnly={fg === "Slug"}
            Label={fg}
            Type="text"
            Value={Values[fg]}
            Placeholder={"Please enter the " + fg.toLowerCase() + "."}
            onChange={onInputChange}
          />
        ))}
      </form>
    </section>
  );
};

export default NewWord;
