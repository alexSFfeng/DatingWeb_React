import {combineReducers} from 'redux';
import users from './userReducer';
import agents from './agentReducer';
import targets from './targetReducer';
import tasks from './taskReducer';
import messages from './chatReducer';


const rootReducer = combineReducers({
  users,
  agents,
  targets,
  tasks,
  messages
});

export default rootReducer;