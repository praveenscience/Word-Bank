import React from "react";
import { Link, Route } from "react-router-dom";
import Card from "../Bootstrap/Card";
import EditWord from "./Welcome/Forms/Edit";
import NewWord from "./Welcome/Forms/New";
import Intro from "./Welcome/Intro";
import List from "./Welcome/List";
import Word from "./Welcome/Word";

const Welcome = ({ User, handleLogout, Words, UpdateWords }) => {
  return (
    <Card
      Header={
        <>
          Welcome
          <span className="btn-group card-header-btn">
            <Link to="/words/new" className="btn btn-sm btn-primary">
              New Word
            </Link>
            <Link
              to="/"
              className="btn btn-sm btn-danger"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </span>
        </>
      }
      Title={"Welcome to Word Bank, " + User.fullname}
      Text="Please add your nice words here."
      className="Welcome"
    >
      <div className="row">
        <div className="col-2">
          <List Words={Words} />
        </div>
        <div className="col-10">
          <Route path="/" exact={true} component={Intro} />
          <Route
            path="/words/new"
            render={rp => <NewWord {...rp} UpdateWords={UpdateWords} />}
          />
          <Route
            path="/word/:wordId/edit"
            exact={true}
            render={rp =>
              Words[rp.match.params.wordId] && (
                <EditWord {...rp} Words={Words} UpdateWords={UpdateWords} />
              )
            }
          />
          <Route
            path="/word/:wordId"
            exact={true}
            render={rp => (
              <Word
                {...rp}
                Words={Words}
                User={User}
                UpdateWords={UpdateWords}
              />
            )}
          />
        </div>
      </div>
    </Card>
  );
};

export default Welcome;
