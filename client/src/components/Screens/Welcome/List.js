import React from "react";
import { NavLink } from "react-router-dom";

const List = ({ Words }) => {
  return (
    <>
      <div className="list-group">
        {Object.keys(Words).length > 0 ? (
          Object.keys(Words).map((word, key) => (
            <NavLink
              to={"/word/" + word}
              className="list-group-item list-group-item-action"
              key={key}
            >
              {Words[word].Word}
            </NavLink>
          ))
        ) : (
          <div className="list-group-item list-group-item-danger text-center">
            No Words!
            <br />
            Please consider <NavLink to="/">adding a word</NavLink>.
          </div>
        )}
      </div>
    </>
  );
};

export default List;
