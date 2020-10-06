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
        {[
          { Label: "Username", Type: "text" },
          { Label: "Password", Type: "password" }
        ].map((fg, key) => (
          <FormGroup
            key={key}
            ID={fg.Label.toLowerCase()}
            Label={fg.Label}
            Type={fg.Type}
            Placeholder={"Please enter your " + fg.Label.toLowerCase() + "."}
            Desc={
              "Please enter your " +
              fg.Label.toLowerCase() +
              " that you created during registration process."
            }
          />
        ))}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </Card>
  );
};

export default Login;
