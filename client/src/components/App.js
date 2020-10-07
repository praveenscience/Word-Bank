import React, { Component } from "react";
import Header from "./Header/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import Logo from "../assets/logo/logo-light.png";
import Console from "../helpers/Console";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Welcome from "./Screens/Welcome";

const InitialForm = {
  Login: {
    loginusername: "",
    loginpassword: "",
    Error: null
  },
  Register: {
    fullname: "",
    username: "",
    password: "",
    confpass: "",
    email: "",
    Error: null
  }
};

// Hardcode Username and Passwords.
const Users = {
  Praveen: "Hello@123",
  AbhiVikrant: "1234@123",
  Santosh: "12345",
  Ruchita: "Carol@123",
  Princy: "passw",
  Nagaraj: "nagsvk123",
  angle: "hello@12"
};

class App extends Component {
  state = {
    User: null,
    Form: InitialForm
  };
  resetForm = () => {
    this.setState({
      Form: InitialForm
    });
  };
  saveState = () => {
    // Check if local storage is supported.
    if (typeof Storage !== "undefined") {
      window.localStorage.setItem("state", JSON.stringify(this.state));
    }
  };
  handleChange = (form, e) => {
    const Form = JSON.parse(JSON.stringify(this.state.Form));
    const { name, value } = e.target;
    Form[form][name] = value;
    this.setState({ Form });
  };
  handleLogin = e => {
    e.preventDefault();
    const {
      loginusername: UserName,
      loginpassword: password
    } = this.state.Form.Login;
    if (UserName.trim().length > 3 && password.trim().length > 3) {
      const Form = { ...this.state.Form };
      Form.Login.Error = null;
      this.setState(
        {
          Form
        },
        this.saveState
      );
      if (Users[UserName] && Users[UserName] === password) {
        this.setState(
          {
            User: { UserName, FullName: UserName },
            Form: InitialForm
          },
          this.saveState
        );
      } else if (!Users[UserName]) {
        const Form = { ...this.state.Form };
        Form.Login.Error = "User not found.";
        this.setState(
          {
            Form
          },
          this.saveState
        );
      } else {
        const Form = { ...this.state.Form };
        Form.Login.Error = "Invalid username and password combination.";
        this.setState(
          {
            Form
          },
          this.saveState
        );
      }
    } else {
      const Form = { ...this.state.Form };
      Form.Login.Error =
        "Please enter both username and password with each being more than 3 characters.";
      this.setState(
        {
          Form
        },
        this.saveState
      );
    }
  };
  handleRegister = e => {
    e.preventDefault();
    const Errors = [];
    const { username: UserName, password, confpass } = this.state.Form.Register;
    if (
      UserName.trim().length > 3 &&
      password.trim().length > 3 &&
      password === confpass &&
      !Users[UserName]
    ) {
      Users[UserName] = password;
      this.setState({
        User: { UserName, FullName: UserName },
        Form: InitialForm
      });
    } else {
      if (!(UserName.trim().length > 3 && password.trim().length > 3)) {
        Errors.push(
          "Please enter both username and password with each being more than 3 characters."
        );
      }
      if (password !== confpass) {
        Errors.push("Both password and confirm password should match.");
      }
      if (!!Users[UserName]) {
        Errors.push("Username already exists.");
      }
      if (Errors.length > 0) {
        const Form = { ...this.state.Form };
        Form.Register.Error = Errors;
        this.setState(
          {
            Form
          },
          this.saveState
        );
      }
    }
  };
  handleLogout = e => {
    e.preventDefault();
    this.setState(
      {
        User: null,
        Form: InitialForm
      },
      this.saveState
    );
  };
  componentDidMount() {
    // Check if local storage is supported.
    if (typeof Storage !== "undefined") {
      this.setState(JSON.parse(window.localStorage.getItem("state")));
    }
  }
  render() {
    const { User } = this.state;
    return (
      <div className="App">
        <Header className="Header fixed-top" dark={true}>
          <img src={Logo} alt="Word Bank Logo" />
          Word Bank
        </Header>
        <ContainerRow fluid={true} className="my-3">
          {User ? (
            <div className="col-12">
              <Welcome User={this.state.User} onSubmit={this.handleLogout} />
            </div>
          ) : (
            <>
              <div className="col-12 mb-3 mb-md-0 col-md-6">
                <Login
                  onSubmit={this.handleLogin}
                  onChange={e => this.handleChange("Login", e)}
                  Values={this.state.Form.Login}
                />
                <Console className="mt-3" data={this.state} />
              </div>
              <div className="col-12 col-md-6">
                <Register
                  onSubmit={this.handleRegister}
                  onChange={e => this.handleChange("Register", e)}
                  Values={this.state.Form.Register}
                />
              </div>
            </>
          )}
        </ContainerRow>
      </div>
    );
  }
}

export default App;
