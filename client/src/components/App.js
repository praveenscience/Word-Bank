import React, { Component } from "react";
import Header from "./Header/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import Card from "./Bootstrap/Card";
import Logo from "../assets/logo/logo-light.png";

class App extends Component {
  state = {
    User: null,
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      User: {
        UserName: "Praveen",
        FullName: "Praveen Kumar Purushothaman",
      },
    });
  };
  handleLogout = (e) => {
    e.preventDefault();
    this.setState({
      User: null,
    });
  };
  render() {
    const { User } = this.state;
    return (
      <div className="App">
        <Header className="Header fixed-top" dark={true}>
          <img src={Logo} alt="Word Bank Logo" />
          Word Bank
        </Header>
        <ContainerRow fluid={true} className="my-3">
          <div className="col-6">
            <Card
              Header={User ? "Welcome" : "Login"}
              Title={(User ? "Welcome" : "Login") + " to Word Bank"}
              Text={
                User
                  ? "Please add your nice words here."
                  : "Please enter your username and password here to sign in to the system."
              }
            >
              <form onSubmit={!User ? this.handleLogin : this.handleLogout}>
                <button type="submit" className="btn btn-primary">
                  {User ? "Logout" : "Login"}
                </button>
              </form>
            </Card>
          </div>
          <div className="col-6">
            <Card
              Header="Register"
              Title="Register for Word Bank"
              Text="Please register to access Word Bank."
            >
              <form>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </Card>
          </div>
        </ContainerRow>
      </div>
    );
  }
}

export default App;
