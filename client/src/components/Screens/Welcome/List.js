import React from "react";
import { NavLink, Link } from "react-router-dom";
import Words from "../../../constants/DemoWords";
import Word from "./Word";

const List = wordList => {
  return (
    <div className="list-group">
      <pre className="border bg-light rounded p-2">
        {JSON.stringify(Words, null, 2)}
      </pre>
      <Link to="/">Word</Link>
      <ul>
        {Word.map((wordList, key) => (
          <li key={key}>
            <NavLink to={"/word/" + key} activeClassName="active">
              {wordList}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
