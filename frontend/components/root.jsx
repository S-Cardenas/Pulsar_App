import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Clusters from './clusters_list/cluster';
import ClusterContainer from './cluster/cluster_container';
import Properties from './properties/property';
import PropertyContainer from './property/property_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/clusters" component={Clusters} >
          <Route path="/clusters/:name" component={ClusterContainer} />
        </Route>
        <Route path="/properties" component={Properties} >
          <Route path="/properties/:name" component={PropertyContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
