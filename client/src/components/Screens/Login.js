import React from "react";
import Card from "../Bootstrap/Card";

const Login = ({ onSubmit }) => {
  return (
    <Card
      Header="Login"
      Title="Login to Word Bank"
      Text="Please enter your username and password here to sign in to the system."
    >
      <form onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </Card>
  );
};

export default Login;
