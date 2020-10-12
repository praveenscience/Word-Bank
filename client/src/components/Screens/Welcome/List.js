import React from "react";
import { NavLink } from "react-router-dom";
import Words from "../../../constants/DemoWords";

const List = () => {
  return (
    <div className="list-group">
      <pre className="border bg-light rounded p-2">
        {JSON.stringify(Words, null, 2)}
      </pre>
      <NavLink
        to="/word/Word1"
        className="list-group-item list-group-item-action"
      >
        Word 1
      </NavLink>
      <NavLink
        to="/word/Word2"
        className="list-group-item list-group-item-action"
      >
        Word 2
      </NavLink>
    </div>
  );
};

export default List;
