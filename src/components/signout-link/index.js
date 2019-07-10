import React, { Component } from 'react';
import userService from './../../services/user-service';

class SignoutLink extends Component {
  signout = () => {
    userService.signout();
  }

  render() {
    return (
      <button type="button" className="nav__submenu__item" onClick={this.signout}>Sign out</button>
    )
  }
}

export default SignoutLink;