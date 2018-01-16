import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './../utils/routes';

class SignUp extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="page__title">Sign up</h1>

        <form className="box user-flow__box">
          <div className="form-group">
            <label>
              <span className="form-group__label">
                Name <abbr className="form-group__required">*</abbr>
              </span>
              <input type="text" name="name" className="form-group__input" placeholder="Your name" />
            </label>
          </div>

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
              <input type="password" name="password" className="form-group__input form-group__input--invalid" placeholder="Your password"/>
              <strong className="form-group__error">Can't be blank</strong>
              <small className="form-group__hint">Must have between 6 and 18 characters</small>
            </label>
          </div>

          <button type="submit" className="btn btn--outline btn--block">Sign up</button>
        </form>
        <p className="user-flow__link">Already have an account? <Link to={Routes.signin}>Sign in</Link></p>
      </div>
    )
  }
}

export default SignUp;