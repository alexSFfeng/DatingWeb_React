import {combineReducers} from 'redux';
import users from './userReducer';
import agents from './agentReducer';

const rootReducer = combineReducers({
  users,
  agents
});

export default rootReducer;