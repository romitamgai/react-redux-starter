import { combineReducers } from 'redux';

import todo from './todo';

/**
 * Root reducer for UI.
 */
const uiReducer = combineReducers({
  todo
});

export default uiReducer;
