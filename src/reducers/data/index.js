import { combineReducers } from 'redux';

import todo from './todo';

/**
 * Root reducer for data.
 */
const dataReducer = combineReducers({
  todo
});

export default dataReducer;
