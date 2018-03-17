import {combineReducers} from 'redux';
import targets from './targetReducer';

const rootReducer = combineReducers({
  targets,
  tasks
});

export default rootReducer;