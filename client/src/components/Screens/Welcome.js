import React from "react";
import Card from "../Bootstrap/Card";

const Welcome = ({ User, onChange, onSubmit }) => {
  return (
    <Card
      Header={
        <>
          Welcome
          <form
            onChange={onChange}
            onSubmit={onSubmit}
            className="card-header-btn"
          >
            <button type="submit" className="btn btn-sm btn-danger">
              Logout
            </button>
          </form>
        </>
      }
      Title={"Welcome to Word Bank, " + User.FullName}
      Text="Please add your nice words here."
      className="Welcome"
    ></Card>
  );
};

export default Welcome;
