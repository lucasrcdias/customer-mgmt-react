import { SIGN_UP, SIGN_IN } from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      const user = action.payload;
      return Object.assign({}, state, { user });
    default:
      return state;
  }
}