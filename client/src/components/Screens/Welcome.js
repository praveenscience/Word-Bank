import React from "react";
import { Route } from "react-router-dom";
import Card from "../Bootstrap/Card";
import Intro from "./Welcome/Intro";
import List from "./Welcome/List";
import Word from "./Welcome/Word";

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
      Title={"Welcome to Word Bank, " + User.fullname}
      Text="Please add your nice words here."
      className="Welcome"
    >
      <div className="row">
        <div className="col-2">
          <List />
        </div>
        <div className="col-10">
          <Route path="/" exact={true} component={Intro} />
          <Route path="/word/:wordId" render={rp => <Word {...rp} />} />
        </div>
      </div>
    </Card>
  );
};

export default Welcome;
