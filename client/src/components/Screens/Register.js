import React from "react";
import Card from "../Bootstrap/Card";

const Register = ({ onSubmit }) => {
  return (
    <Card
      Header="Register"
      Title="Register for Word Bank"
      Text="Please register to access Word Bank."
    >
      <form onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </Card>
  );
};

export default Register;
