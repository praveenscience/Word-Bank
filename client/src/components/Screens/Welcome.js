import React from "react";
import Card from "../Bootstrap/Card";
import List from "./Welcome/List";

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
    >
      <div className="row">
        <div className="col-2">
          <List />
        </div>
        <div className="col-10"></div>
      </div>
    </Card>
  );
};

export default Welcome;
