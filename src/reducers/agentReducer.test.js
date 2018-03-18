import expect from 'expect';
import agentReducer from './agentReducer';
import * as actions from '../actions/createUserAction';

describe('Agent Reducer', () => {
  it('should add new agents when passed GET_AGENT_SUCCESS', () => {
    // arrange
    const newAgents = [
      {employeeID: 'Agent Qu'},
      {employeeID: 'Agent Feng'},
      {employeeID: 'Agent Chu'}
    ];

    const initialState = [];

    const action = actions.loadAgentsSuccess(newAgents);

    //act
    const newState = agentReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].employeeID).toEqual('Agent Qu');
    expect(newState[1].employeeID).toEqual('Agent Feng');
    expect(newState[2].employeeID).toEqual('Agent Chu');
  });
  
});