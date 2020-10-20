import React, { Component } from "react";
import Header from "./Header/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import Logo from "../assets/logo/logo-light.png";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Welcome from "./Screens/Welcome";
import { Link } from "react-router-dom";
import { UserLogin, UserRegister } from "../services/User";
import { CheckEmail } from "../helpers/Validators";

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
      loginusername: username,
      loginpassword: password
    } = this.state.Form.Login;
    if (username.trim().length > 3 && password.trim().length > 3) {
      const Form = { ...this.state.Form };
      Form.Login.Error = null;
      this.setState(
        {
          Form
        },
        this.saveState
      );
      UserLogin(username, password)
        .then(res => {
          this.setState(
            {
              User: res.data.User,
              Form: InitialForm
            },
            this.saveState
          );
        })
        .catch(err => {
          const { data } = err.response;
          const Form = { ...this.state.Form };
          Form.Login.Error = data.ErrorMessage;
          this.setState(
            {
              Form
            },
            this.saveState
          );
        });
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
    const {
      fullname,
      username,
      password,
      confpass,
      email
    } = this.state.Form.Register;
    if (
      username.trim().length > 3 &&
      password.trim().length > 3 &&
      fullname.trim().length > 3 &&
      email.trim().length > 3 &&
      password === confpass &&
      CheckEmail(email.trim())
    ) {
      UserRegister(username, password, fullname, email)
        .then(res => {
          if (res.status === 201) {
            this.setState(
              {
                User: { username, fullname, email },
                Form: InitialForm
              },
              this.saveState
            );
          }
        })
        .catch(err => {
          const Form = { ...this.state.Form };
          Form.Register.Error = [err.response.data.ErrorMessage];
          this.setState({
            Form
          });
        });
    } else {
      if (username.trim().length <= 3) {
        Errors.push("Please enter username with more than 3 characters.");
      }
      if (password.trim().length <= 3) {
        Errors.push("Please enter password with more than 3 characters.");
      }
      if (fullname.trim().length <= 3) {
        Errors.push("Please enter your full name with more than 3 characters.");
      }
      if (email.trim().length <= 3) {
        Errors.push("Please enter your email with more than 3 characters.");
      }
      if (!CheckEmail(email.trim())) {
        Errors.push("Please enter a valid email address.");
      }
      if (password !== confpass) {
        Errors.push("Both password and confirm password should match.");
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
          <Link to="/">
            <img src={Logo} alt="Word Bank Logo" />
            Word Bank
          </Link>
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
