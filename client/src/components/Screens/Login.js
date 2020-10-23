import React from "react";
import Card from "../Bootstrap/Card";
import FormGroup from "../Bootstrap/Forms/FormGroup";

const Login = ({ onChange, onSubmit, Values }) => {
  const onInputChange = () => {};
  return (
    <Card
      Header="Login"
      Title="Login to Word Bank"
      Text="Please enter your username and password here to sign in to the system."
    >
      <form onChange={onChange} onSubmit={onSubmit}>
        {Values.Error && (
          <div className="alert alert-danger">{Values.Error}</div>
        )}
        {[
          { Label: "LoginUsername", Type: "text" },
          { Label: "LoginPassword", Type: "password" }
        ].map((fg, key) => (
          <FormGroup
            key={key}
            ID={fg.Label.toLowerCase()}
            Label={fg.Label.replace("Login", "")}
            Type={fg.Type}
            Value={Values[fg.Label.toLowerCase()]}
            Placeholder={
              "Please enter your " +
              fg.Label.replace("Login", "").toLowerCase() +
              "."
            }
            onChange={onInputChange}
            Desc={
              "Please enter your " +
              fg.Label.replace("Login", "").toLowerCase() +
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
