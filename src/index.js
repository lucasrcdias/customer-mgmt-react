import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from './history';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Routes
import Routes from './utils/routes';

// Pages
import signIn from './components/signin';
import signUp from './components/signup';
import dashboard from './components/dashboard';

import './index.css';

export const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route exact path={Routes.signin} component={signIn} />
          <Route exact path={Routes.signup} component={signUp} />
          <Route exact path={Routes.dashboard} component={dashboard} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>,
  document.querySelector('.js-root')
);