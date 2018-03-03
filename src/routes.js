import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

// routing of the app
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="clientProfile" render={routeProps => <Layout {...routeProps} isClient={true} /> }/>
    <Route path="providerProfile" render={routeProps => <Layout {...routeProps} isClient={false} /> }/>
  </Route>
);