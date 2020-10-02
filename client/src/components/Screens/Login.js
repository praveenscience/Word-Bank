import React from "react";
import Card from "../Bootstrap/Card";
import FormGroup from "../Bootstrap/Forms/FormGroup";

const Login = ({ onChange, onSubmit }) => {
  return (
    <Card
      Header="Login"
      Title="Login to Word Bank"
      Text="Please enter your username and password here to sign in to the system."
    >
      <form onChange={onChange} onSubmit={onSubmit}>
        <FormGroup
          ID="username"
          Label="Username"
          Type="text"
          Placeholder="Please enter your username."
          Desc="Please enter your username that you created during registration process."
        />
        <FormGroup
          ID="password"
          Label="Password"
          Type="password"
          Placeholder="Please enter your password."
          Desc="Please enter your password that you created during registration process."
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </Card>
  );
};

export default Login;
