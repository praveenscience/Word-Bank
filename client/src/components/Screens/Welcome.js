import React from "react";
import Card from "../Bootstrap/Card";

const Welcome = ({ onSubmit }) => {
  return (
    <Card
      Header="Welcome"
      Title="Welcome to Word Bank"
      Text="Please add your nice words here."
    >
      <form onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary">
          Logout
        </button>
      </form>
    </Card>
  );
};

export default Welcome;
