import { combineReducers } from 'redux';

import ui from './ui';
import data from './data';

/**
 * Application root reducer.
 */
const rootReducer = combineReducers({
  ui,
  data
});

export default rootReducer;
