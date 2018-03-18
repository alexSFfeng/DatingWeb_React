import {combineReducers} from 'redux';
import targets from './targetReducer';
import tasks from './taskReducer';

const rootReducer = combineReducers({
  targets,
  tasks
});

export default rootReducer;