// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Main components
import SignUp from './components/signup';
import Home from './components/home';

// Style
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);