import axios from 'axios';
import environment from './../utils/environment';
import Routes from './../utils/routes';
import { store } from './../index';
import actions from './../actions';
import history from './../history';

class UserService {
  signup = (user) => {
    return new Promise((resolve, reject) => {
      axios.post(`${environment.apiUrl}/users`, { user })
        .then((response) => {
          store.dispatch(actions.signUp(response.data));
          localStorage.setItem('token', response.data.token);
          history.push(Routes.index);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        })
    });
  }

  signin = (user) => {
    return new Promise((resolve, reject) => {
      axios.post(`${environment.apiUrl}/auth`, { user })
        .then((response) => {
          store.dispatch(actions.signIn(response.data));
          localStorage.setItem('token', response.data.token);
          history.push(Routes.index);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        })
    });
  }
}

export default new UserService();