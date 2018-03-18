import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      console.log("action get user called " + action.users);
      return action.users;

    case types.CREATE_USER_SUCCESS:
      console.log("action called" + action.user);
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    default:
      return state;
  }
}
