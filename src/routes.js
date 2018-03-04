import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

// routing of the app
//<Route path="clientProfile" render={function(isClient){ return <Layout isClient={true} /> }}/>
//<Route path="clientProfile" render={function(isClient){ return <Layout isClient={false} /> }}/>

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);