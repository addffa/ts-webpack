import React, { Component } from 'react';

class LoginControl extends Component<{}, {isLogin: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {isLogin: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLogin: true});
  }

  handleLogoutClick() {
    this.setState({isLogin: false});
  }

  render() {
    const isLogin = this.state.isLogin;
    let button: JSX.Element;
    if(isLogin) {
      button = <button onClick={this.handleLogoutClick}>logout</button>
    } else {
      button = <button onClick={this.handleLoginClick}>login</button>
    }
    return(
      <div>{button}</div>
    )
  }
}

export default LoginControl;