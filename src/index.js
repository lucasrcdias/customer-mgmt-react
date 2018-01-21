import React from 'react';
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

import './index.css';

export const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={Routes.signin} component={signIn} />
          <Route exact path={Routes.signup} component={signUp} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('.js-root')
);