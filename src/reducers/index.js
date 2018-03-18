import {combineReducers} from 'redux';
import users from './userReducer';
import agents from './agentReducer';
import targets from './targetReducer';


const rootReducer = combineReducers({
  users,
  agents,
  targets,
  tasks
});

export default rootReducer;