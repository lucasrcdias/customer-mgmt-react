import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Pages
import SignIn from './pages/signin';
import SignUp from './pages/signup';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  </Router>,
  document.querySelector('.js-root')
);