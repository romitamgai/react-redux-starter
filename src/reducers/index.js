import { combineReducers } from 'redux';

import { CLEAR_TODOS } from '../actions/todo';

import ui from './ui';
import data from './data';

/**
 * Application root reducer.
 */
const rootReducer = combineReducers({
  ui,
  data
});

export default (state, action) => {
  let value = rootReducer(state, action);

  if (action.type === CLEAR_TODOS) {
    const initialStates = {
      ui: ui(undefined, { type: 'noop' }),
      data: data(undefined, { type: 'noop' })
    };

    value = rootReducer(initialStates, action);
  }

  return value;
};
