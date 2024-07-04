import { RESTORE_USER, SIGN_IN, LOGOUT } from '../actions/auth'

const initialState = {
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_USER:
    case SIGN_IN:
      return {
        ...state,
        email: action.email
      }
    case LOGOUT:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}
