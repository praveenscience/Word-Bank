import React, { Component } from "react";
import Header from "./Header/Header";
import Logo from "../assets/logo/logo-light.png";

class App extends Component {
  state = {
    A: "B"
  };
  constructor(props) {
    super(props);
    console.log("Constructor called!");
  }
  componentWillMount() {
    console.log("componentWillMount called!");
  }
  componentDidMount() {
    console.log("componentDidMount called!");
    setTimeout(() => {
      console.log("Changing State...");
      this.setState({ A: "A" });
    }, 1000);
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps called!");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called!");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate called!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called!");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called!");
  }
  render() {
    console.log("Render function called!");
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
