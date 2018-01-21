import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './../../utils/routes';
import { Hint, Label, Validation, Input, FormGroup } from './../presentationals/forms';
import userService from './../../services/user-service';

class SignUp extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errors: []
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;

    userService.signup({ name, email, password })
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
        <h1 className="page__title">Sign up</h1>

        <form className="box user-flow__box" onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label text="Name" required="true">
              <Input name="name" type="text" placeholder="Your full name" value={this.state.name} onChange={this.onInputChange} invalid={this.isInvalid('name')}/>
            </Label>
            <Validation text={this.errorMessagesFor('name')} />
          </FormGroup>

          <FormGroup>
            <Label text="E-mail" required="true">
              <Input name="email" type="email" placeholder="Your best e-mail" value={this.state.email} onChange={this.onInputChange} invalid={this.isInvalid('email')}/>
            </Label>
            <Validation text={this.errorMessagesFor('email')} />
          </FormGroup>

          <FormGroup>
            <Label text="Password" required="true">
              <Input name="password" type="password" placeholder="Your secret password" value={this.state.password} onChange={this.onInputChange} invalid={this.isInvalid('password')}/>
            </Label>
            <Hint text="Must have between 6 and 18 characters" />
            <Validation text={this.errorMessagesFor('password')} />
          </FormGroup>

          <button type="submit" className="btn btn--outline btn--block">Sign up</button>
        </form>
        <p className="user-flow__link">Already have an account? <Link className="link" to={Routes.signin}>Sign in</Link></p>
      </div>
    )
  }
}

export default SignUp;