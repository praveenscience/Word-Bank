import React, { Component } from "react";
import Header from "./Header/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import Card from "./Bootstrap/Card";
import Logo from "../assets/logo/logo-light.png";

class App extends Component {
  state = {
    User: null
  };
  render() {
    return (
      <div className="App">
        <Header className="Header fixed-top" dark={true}>
          <img src={Logo} alt="Word Bank Logo" />
          Word Bank
        </Header>
        <ContainerRow fluid={true} className="my-3">
          <div className="col-6">
            <Card
              Header="Login"
              Title="Login to Word Bank"
              Text="Please enter your username and password here to sign in to the system."
            >
              <form>
                <button type="submit" className="btn btn-primary">
                  Login
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
