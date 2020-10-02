import React from "react";
import Card from "../Bootstrap/Card";

const Register = ({ onChange, onSubmit }) => {
  return (
    <Card
      Header="Register"
      Title="Register for Word Bank"
      Text="Please register to access Word Bank and add new words to the system."
    >
      <form onChange={onChange} onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </Card>
  );
};

export default Register;
