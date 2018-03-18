import {combineReducers} from 'redux';
import users from './userReducer';
import agents from './agentReducer';
import targets from './targetReducer';
import tasks from './taskReducer';


const rootReducer = combineReducers({
  users,
  agents,
  targets,
  tasks
});

export default rootReducer;