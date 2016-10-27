import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import ClustersListContainer from './clusters_list/clusters_list_container';
import ClusterContainer from './cluster/cluster_container';
import PropertiesListContainer from './properties/properties_list_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/clusters" component={ClustersListContainer} />
        <Route path="/clusters/:name" component={ClusterContainer} />
        <Route path="/property" component={PropertiesListContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
