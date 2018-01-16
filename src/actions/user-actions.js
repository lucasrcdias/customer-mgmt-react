import { SIGNED_UP } from 

function SignUp (user) {
  return {
    type: SIGNED_UP,
    user
  }
}

export default {
  SignUp
}