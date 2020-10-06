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
        {[
          {
            ID: "fullname",
            Label: "Your Name",
            Placeholder: "Please enter your full name.",
            Type: "text",
            Desc: "Please enter your full name so that we can call you by that."
          },
          {
            ID: "username",
            Label: "Username",
            Placeholder: "Please enter your username.",
            Type: "text",
            Desc:
              "Please enter your username so that you can use for logging in."
          },
          {
            ID: "password",
            Label: "Password",
            Placeholder: "Please enter your password.",
            Type: "password",
            Desc:
              "Please enter your password so that you can use for logging in."
          },
          {
            ID: "confpass",
            Label: "Confirm Password",
            Placeholder: "Please enter the same password as above.",
            Type: "password",
            Desc:
              "Please enter your password again so that it makes your life tougher."
          },
          {
            ID: "email",
            Label: "Email Address",
            Placeholder: "Please enter your email address.",
            Type: "email",
            Desc: "Please enter your email address so we can send you spam."
          }
        ].map((fg, key) => (
          <FormGroup key={key} {...fg} />
        ))}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </Card>
  );
};

export default Register;
