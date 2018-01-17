import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './../utils/routes';

import { Hint, Label, Validation, Input } from './../components/presentationals/forms';

class SignUp extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="page__title">Sign up</h1>

        <form className="box user-flow__box">
          <div className="form-group">
            <Label text="Name" required="true">
              <Input type="text" placeholder="Your name"/>
            </Label>
          </div>

          <div className="form-group">
            <Label text="E-mail" required="true">
              <Input type="email" placeholder="Your email"/>
            </Label>
          </div>

          <div className="form-group">
            <Label text="Password" required="true">
              <Input type="password" placeholder="Your password"/>
            </Label>
          </div>

          <button type="submit" className="btn btn--outline btn--block">Sign up</button>
        </form>
        <p className="user-flow__link">Already have an account? <Link to={Routes.signin}>Sign in</Link></p>
      </div>
    )
  }
}

export default SignUp;