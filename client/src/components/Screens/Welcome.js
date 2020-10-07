import React from "react";
import Card from "../Bootstrap/Card";

const Welcome = ({ User, onChange, onSubmit }) => {
  return (
    <Card
      Header="Welcome"
      Title={"Welcome to Word Bank, " + User.FullName}
      Text="Please add your nice words here."
    >
      <form onChange={onChange} onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary">
          Logout
        </button>
      </form>
    </Card>
  );
};

export default Welcome;
