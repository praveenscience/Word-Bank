import React, { Component } from "react";
import Header from "./Header/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import Logo from "../assets/logo/logo-light.png";
// import Console from "../helpers/Console";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Welcome from "./Screens/Welcome";

class App extends Component {
  state = {
    User: null,
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.setState(
      {
        User: {
          UserName: "Praveen",
          FullName: "Praveen Kumar Purushothaman"
        }
      },
      () => {
        // Check if local storage is supported.
        if (typeof Storage !== "undefined") {
          window.localStorage.setItem("state", JSON.stringify(this.state));
        }
      }
    );
  };
  handleLogout = (e) => {
    e.preventDefault();
    this.setState(
      {
        User: null
      },
      () => {
        // Check if local storage is supported.
        if (typeof Storage !== "undefined") {
          window.localStorage.setItem("state", JSON.stringify(this.state));
        }
      }
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
              <Welcome onSubmit={this.handleLogout} />
            </div>
          ) : (
            <>
              <div className="col-12 mb-3 mb-md-0 col-md-6">
                <Login onSubmit={this.handleLogin} />
              </div>
              <div className="col-12 col-md-6">
                <Register />
              </div>
            </>
          )}
        </ContainerRow>
      </div>
    );
  }
}

export default App;
