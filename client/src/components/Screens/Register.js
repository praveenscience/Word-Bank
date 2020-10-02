import React from "react";
import Card from "../Bootstrap/Card";
import FormGroup from "../Bootstrap/Forms/FormGroup";

const Register = ({ onChange, onSubmit }) => {
  return (
    <Card
      Header="Register"
      Title="Register for Word Bank"
      Text="Please register to access Word Bank and add new words to the system."
    >
      <form onChange={onChange} onSubmit={onSubmit}>
        <FormGroup
          ID="fullname"
          Label="Your Name"
          Type="text"
          Placeholder="Please enter your full name."
          Desc="Please enter your full name so that we can call you by that."
        />
        <FormGroup
          ID="username"
          Label="Username"
          Type="text"
          Placeholder="Please enter your username."
          Desc="Please enter your username so that you can use for logging in."
        />
        <FormGroup
          ID="password"
          Label="Password"
          Type="password"
          Placeholder="Please enter your password."
          Desc="Please enter your password so that you can use for logging in."
        />
        <FormGroup
          ID="confpass"
          Label="Confirm Password"
          Type="password"
          Placeholder="Please enter the same password as above."
          Desc="Please enter your password again so that it makes your life tougher."
        />
        <FormGroup
          ID="email"
          Label="Email Address"
          Type="email"
          Placeholder="Please enter your email address."
          Desc="Please enter your email address so we can send you spam."
        />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </Card>
  );
};

export default Register;
