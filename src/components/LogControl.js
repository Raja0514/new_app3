import React, { Component } from "react";
import Greeting from "./Greeting";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
class LogControl extends Component {
  constructor(props) {
    super(props);
    this.handleClickLogout = this.handleClickLogout.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.state = { login: false };
  }
  handleClickLogin() {
    this.setState({ login: true });
  }
  handleClickLogout() {
    this.setState({ login: false });
  }
  render() {
    const loginuser = this.state.login;
    let button;
    if (loginuser) {
      button = <LogoutButton onClick={this.handleClickLogout}></LogoutButton>;
    } else {
      button = <LoginButton onClick={this.handleClickLogin}></LoginButton>;
    }
    return (
      <div>
        <Greeting login={loginuser}></Greeting>
        {button}
      </div>
    );
  }
}
export default LogControl;
