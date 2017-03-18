import React from 'react';

import { render } from 'react-dom';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import MainComponent from './components/main';
import App from './app';

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="*" component={App}>
          <IndexRoute component={MainComponent}></IndexRoute>
        </Route>
      </Router>
    </Provider>
  , document.getElementById('app'));
