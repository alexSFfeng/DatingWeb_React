import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function agentsReducer(state = initialState.agents, action) {
  switch (action.type) {
    case types.GET_AGENT_SUCCESS:
      return action.agents;

    default:
      return state;
  }
}