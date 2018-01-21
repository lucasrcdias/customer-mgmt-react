import { SIGN_UP, SIGN_IN } from './../constants';

function SignUp (user) {
  return {
    type: SIGN_UP,
    payload: user
  }
}

function SignIn (user) {
  return {
    type: SIGN_IN,
    payload: user
  }
}

export const signUp = SignUp;
export const signIn = SignIn;