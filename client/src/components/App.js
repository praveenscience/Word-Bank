import React, { Component } from "react";
import Header from "./Header/Header";
import Logo from "../assets/logo/logo-light.png";
import InputWord from "./InputWord";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header fixed-top" dark={true}>
          <img src={Logo} alt="Word Bank Logo" />
          Word Bank
        </Header>
      </div>
    );
  }
}

export default App;
