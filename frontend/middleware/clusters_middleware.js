import { REQUEST_CLUSTERS,
         REQUEST_CLUSTER,
         receiveCluster,
         receiveClusters, } from '../actions/clusters_actions';

import { fetchClusters,
         fetchCluster } from '../util/api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const clustersSuccess = (data) => dispatch(receiveClusters(data));
  const clusterSuccess = (data) => dispatch(receiveCluster(data));
  const error = (e) => console.log(e);

  switch( action.type ) {
    case REQUEST_CLUSTERS:
      fetchClusters(clustersSuccess, error);
      break;
    case REQUEST_CLUSTER:
      fetchCluster(action.data, clusterSuccess, error);
      break;
    default:
      next(action);
  }
};
