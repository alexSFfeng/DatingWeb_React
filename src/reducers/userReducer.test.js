import expect from 'expect';
import userReducer from './userReducer';
import * as actions from '../actions/createUserAction';

describe('User Reducer', () => {
  it('should create new user when CREATE_USER_SUCCESS was called', () => {
    // arrange
    const initialUsers = [
      {name: "Ada Qu"},
      {name: "Alex Feng"}
    ];

    const newUser = {
      name: "Issac Chu"
    }
    const action = actions.createUserSuccess(newUser);

    //act
    const newState = userReducer(initialUsers, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual('Ada Qu');
    expect(newState[1].name).toEqual('Alex Feng');
    expect(newState[2].name).toEqual('Issac Chu');
  });
  
  it('should load new users when passed GET_USER_SUCCESS', () => {
    // arrange
    const newUsers = [
      {name: 'Bob'},
      {name: 'Maury'},
      {name: 'Jerry'}
    ];

    const initialState = [];

    const action = actions.loadUsersSuccess(newUsers);

    //act
    const newState = userReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual('Bob');
    expect(newState[1].name).toEqual('Maury');
    expect(newState[2].name).toEqual('Jerry');
  });
});