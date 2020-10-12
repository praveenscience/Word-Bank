import React from "react";
import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <div className="list-group">
      <NavLink
        to="/word/hello"
        className="list-group-item list-group-item-action"
      >
        Hello
      </NavLink>
      <NavLink
        to="/word/world"
        className="list-group-item list-group-item-action"
      >
        World
      </NavLink>
    </div>
  );
};

export default List;
