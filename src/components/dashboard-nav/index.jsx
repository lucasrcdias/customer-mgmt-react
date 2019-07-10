import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Routes from './../../utils/routes';
import SignoutLink from './../signout-link';

class DashboardNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user
    }
  }

  render() {
    return (
      <nav className="nav">
        <div className="container">
          <ul className="nav__menu">
            <li className="nav__menu__item">
              <span className="nav__menu__text">Hello, <strong>{this.state.user.name}</strong></span>

              <div className="nav__submenu">
                <Link className="nav__submenu__item" to={Routes.edit}>Edit</Link>
                <SignoutLink />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DashboardNav);