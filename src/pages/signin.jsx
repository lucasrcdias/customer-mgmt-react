import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './../utils/routes';

class SignIn extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="page__title">Sign in</h1>

        <form className="box user-flow__box">
          <div className="form-group">
            <label>
              <span className="form-group__label">
                E-mail <abbr className="form-group__required">*</abbr>
              </span>
              <input type="email" name="email" className="form-group__input" placeholder="Your e-mail"/>
            </label>
          </div>

          <div className="form-group">
            <label>
              <span className="form-group__label">
                Password <abbr className="form-group__required">*</abbr>
              </span>
              <input type="password" name="password" className="form-group__input" placeholder="Your password"/>
            </label>
          </div>

          <button type="submit" className="btn btn--outline btn--block">Sign in</button>
        </form>

        <p className="user-flow__link">Don't have an account? <Link to={Routes.signup}>Sign up</Link></p>
      </div>
    )
  }
}

export default SignIn;