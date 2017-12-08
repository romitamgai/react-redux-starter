import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './reducers';

const enhancers = [
  autoRehydrate(),
  applyMiddleware(thunk, promiseMiddleware())
];

if (window['__REDUX_DEVTOOLS_EXTENSION__']) {
  enhancers.push(window['__REDUX_DEVTOOLS_EXTENSION__']());
}

const store = createStore(rootReducer, compose(...enhancers));

/**
 * A Promise that resolves after persisting the Redux store.
 */
export const persist = () => {
  return new Promise(resolve => {
    persistStore(store, {}, resolve);
  });
};

/**
 * Clears storage used by persist.
 */
export const purgeStore = () => {
  persistStore(store).purge();
};

export default store;
