import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './../utils/routes';

import { Hint, Label, Validation, Input } from './../components/presentationals/forms';

class SignIn extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="page__title">Sign in</h1>

        <form className="box user-flow__box">
          <div className="form-group">
            <Label text="E-mail">
              <Input type="email" placeholder="Your email"/>
            </Label>
          </div>

          <div className="form-group">
            <Label text="Password">
              <Input type="password" placeholder="Your password"/>
            </Label>
          </div>

          <button type="submit" className="btn btn--outline btn--block">Sign in</button>
        </form>

        <p className="user-flow__link">Don't have an account? <Link to={Routes.signup}>Sign up</Link></p>
      </div>
    )
  }
}

export default SignIn;