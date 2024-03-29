import {
  SET_AUTHED_USER,
  GET_AUTHED_USER_FROM_COOKIE,
  LOGOUT_AUTHED_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
       return action.id;
    case GET_AUTHED_USER_FROM_COOKIE :
      return action.id;
    case LOGOUT_AUTHED_USER :
      return action.id;
    default :
      return state
  }
}
