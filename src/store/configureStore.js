import {createStore} from 'redux';
import rootReducers from '../reducers';

export default function configureStore(initialState){
  return createStore(
    rootReducers,
    initialState
  );
}