import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Layout from './components/Layout';

// routing of the app
//<Route path="clientProfile" render={function(isClient){ return <Layout isClient={false} /> }}/>

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="clientProfile" component={Layout} isClient={true} isProfile={true}/>
    <Route path="providerProfile" component={Layout} isClient={false} isProfile={true}/>
    <Route path="providerSchedule" component={Layout} isClient={false} isProfile={false}/>
    <Route path="clientSchedule" component={Layout} isClient={true} isProfile={false}/>
  </Route>
);