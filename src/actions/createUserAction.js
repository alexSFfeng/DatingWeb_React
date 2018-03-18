import LoginApi from '../api/mockLoginApi';
import * as types from "./actionTypes";

export function loadUsersSuccess(users){
  return {type: types.GET_USER_SUCCESS, users: users};
}

export function loadAgentsSuccess(agents){
  return {type: types.GET_AGENT_SUCCESS, agents: agents};
}

export function createUserSuccess(user){
  return {type: types.CREATE_USER_SUCCESS, user : user};
}

export function loadUsers(){
  return function(dispatch) {
    return LoginApi.getAllUsers().then(users =>{
      dispatch(loadUsersSuccess(users));
    });
  };
}

export function loadAgents(){
  return function(dispatch) {
    return LoginApi.getAllAgents().then(agents =>{
      dispatch(loadAgentsSuccess(agents));
    });
  };
}

export function createUser(user){
  return function(dispatch) {
    return LoginApi.saveUser(user).then(user =>{
      dispatch(createUserSuccess(user));
    });
  };
}