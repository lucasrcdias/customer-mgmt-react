import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './../../utils/routes';

class DashboardNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Lucas'
      }
    }
  }

  signout = () => {
    console.log('Clicked signout');
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
                <button type="button" className="nav__submenu__item" onClick={this.signout}>Sign out</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default DashboardNav;