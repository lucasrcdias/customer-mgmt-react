import { SIGN_UP, SIGN_IN, SIGN_OUT } from './../constants';

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

function SignOut (user) {
  return {
    type: SIGN_OUT,
    payload: user
  }
}

export const signUp = SignUp;
export const signIn = SignIn;
export const signOut = SignOut;