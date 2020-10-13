import React from "react";
import { NavLink } from "react-router-dom";
import Words from "../../../constants/DemoWords";

const List = () => {
  return (
    <>
      <div className="list-group">
        {Object.keys(Words).map((word, key) => (
          <NavLink
            to={"/word/" + word}
            className="list-group-item list-group-item-action"
            key={key}
          >
            {Words[word].Word}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default List;
