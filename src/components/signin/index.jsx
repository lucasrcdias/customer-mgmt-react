import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './../../utils/routes';
import { Label, Validation, Input, FormGroup } from './../presentationals/forms';
import userService from './../../services/user-service';

class SignIn extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: []
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    userService.signin({ email, password })
      .catch((errors) => {
        console.log(errors);
        this.setState({ errors });
      });
  }

  onInputChange = (event) => {
    const target = event.target;

    this.setState({
      [target.name]: target.value
    });
  }

  errorsFor = (field) => {
    return this.state.errors.filter((error) => {
      return error.path === field;
    });
  }

  errorMessagesFor = (field) => {
    const messages = this.errorsFor(field).map((error) => {
      return error.message;
    });

    return messages.join(', ');
  }

  isInvalid = (field) => {
    return this.errorsFor(field).length > 0 ? "true" : undefined;
  }

  render() {
    return (
      <div className="page">
        <h1 className="page__title">Sign in</h1>

        <form className="box user-flow__box" onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label text="E-mail">
              <Input name="email" type="email" placeholder="Your e-mail" value={this.state.email} onChange={this.onInputChange} invalid={this.isInvalid('email')}/>
            </Label>
            <Validation text={this.errorMessagesFor('email')} />
          </FormGroup>

          <FormGroup>
            <Label text="Password">
              <Input name="password" type="password" placeholder="Your password" value={this.state.password} onChange={this.onInputChange} invalid={this.isInvalid('password')}/>
            </Label>
            <Validation text={this.errorMessagesFor('password')} />
          </FormGroup>

          <Validation text={this.errorMessagesFor('unavailable')} />

          <button type="submit" className="btn btn--outline btn--block">Sign in</button>
        </form>

        <p className="user-flow__link">Don't have an account? <Link to={Routes.signup}>Sign up</Link></p>
      </div>
    )
  }
}

export default SignIn;