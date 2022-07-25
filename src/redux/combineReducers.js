import {combineReducers} from 'redux';
import testReducer from './reducers/testReducers';
import characterReducer from './reducers/characterReducer';
import filterCharacterReducer from './reducers/filterCharacterReducer';
import characterDetailsReducer from './reducers/characterDetailsReducer';

const combinedReducers = combineReducers({
  testReducer,
  characterReducer,
  filterCharacterReducer,
  characterDetailsReducer,
});

export default combinedReducers;
