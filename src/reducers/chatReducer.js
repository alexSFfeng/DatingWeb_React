import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.messages, action) {
  switch (action.type) {
    case types.SAVE_MESSAGE_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.message)
    ];

    default:
      return state;
  }
}