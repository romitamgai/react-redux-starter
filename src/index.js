import './public';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { persist } from './store';

import Router from './routes';

(async () => {
  await persist();

  render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
  );
})();
