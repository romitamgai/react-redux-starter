import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as routeConstants from './constants/routes';

import Home from './components/Home';
import ScrollToTop from './components/commons/ScrollToTop';
import PageNotFound from './components/commons/PageNotFound';

const Router = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path={routeConstants.HOME} component={Home} />
        {<Route component={PageNotFound} />}
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default Router;
