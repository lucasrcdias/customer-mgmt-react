import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Routes
import Routes from './utils/routes';

// Pages
import SignIn from './pages/signin';
import SignUp from './pages/signup';

import './index.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path={Routes.signin} component={SignIn} />
          <Route exact path={Routes.signup} component={SignUp} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('.js-root')
);