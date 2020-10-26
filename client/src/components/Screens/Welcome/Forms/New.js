import React, { useState } from "react";
import FormGroup from "../../../Bootstrap/Forms/FormGroup";

const NewWord = () => {
  const [Error, setError] = useState(false);
  const [Values, setValues] = useState({
    slug: "",
    word: "",
    meaning: "",
    sentence: ""
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
      slug: e.target.name === "word" ? sluggify(e.target.value) : Values.slug
    });
  };
  return (
    <section className="Word">
      <h3>Create a New Word</h3>
      <p>Use the below form to create a new word.</p>
      <form>
        {Error && <div className="alert alert-danger">{Values.Error}</div>}
        {["Slug", "Word", "Meaning", "Sentence"].map((fg, key) => (
          <FormGroup
            key={key}
            ID={fg.toLowerCase()}
            ReadOnly={fg === "Slug"}
            Label={fg}
            Type="text"
            Value={Values[fg.toLowerCase()]}
            Placeholder={"Please enter the " + fg.toLowerCase() + "."}
            onChange={onInputChange}
          />
        ))}
      </form>
    </section>
  );
};

export default NewWord;
