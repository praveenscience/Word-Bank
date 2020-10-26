import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const List = ({ Words }) => {
  const [Search, setSearch] = useState("");
  const SearchFilter = slug => {
    return slug.indexOf(Search.toLowerCase()) > -1;
  };
  return (
    <>
      <input
        type="search"
        className="form-control btn-sm mb-3"
        placeholder="Search Words..."
        value={Search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="list-group">
        {Object.keys(Words).filter(SearchFilter).length > 0 ? (
          Object.keys(Words)
            .filter(SearchFilter)
            .map((word, key) => (
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
