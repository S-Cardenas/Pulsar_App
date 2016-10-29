import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Clusters from './clusters_list/cluster';
import ClusterGroup from './cluster/cluster_group';
import Properties from './properties/property';
import PropertyContainer from './property/property_container';
import BrokerListContainer from './cluster/broker_list_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/clusters" component={Clusters} >
          <Route path="/clusters/:name" component={ClusterGroup} >
            <Route path="/clusters/:name/brokers" component={BrokerListContainer}/>
          </Route>
        </Route>
        <Route path="/properties" component={Properties} >
          <Route path="/properties/:name" component={PropertyContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
