import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Main components
import SignIn from './components/signin';
import SignUp from './components/signup';

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