import {combineReducers} from 'redux';
import wealtherReducers from './wealtherReducers';
import homeReducers from './homeReducer';

const allReducers = combineReducers({
  wealtherReducers,
  homeReducers,
});

export default allReducers;
