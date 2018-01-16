import { SIGNED_UP } from './../constants';

let user = {
  email: null,
  password: null,
  name: null
}

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_UP:
      const { email, password, name } = action;
      
      user = {
        email,
        password,
        name
      }

      return user;
    default:
      return state;
  }
}