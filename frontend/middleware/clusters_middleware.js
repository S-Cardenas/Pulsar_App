import { REQUEST_CLUSTERS,
         REQUEST_CLUSTER,
         CREATE_CLUSTER,
         receiveCluster,
         receiveClusters, } from '../actions/clusters_actions';

import { fetchClusters,
         fetchCluster,
         createCluster } from '../util/api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const clustersSuccess = (data) => dispatch(receiveClusters(data));
  const clusterSuccess = (data) => dispatch(receiveCluster(data));
  const createSuccess = (data) => { action.callback(data);
                                    return dispatch();};
  const error = (e) => console.log(e);

  switch( action.type ) {
    case REQUEST_CLUSTERS:
      fetchClusters(clustersSuccess, error);
      break;
    case REQUEST_CLUSTER:
      fetchCluster(action.data, clusterSuccess, error);
      break;
    case CREATE_CLUSTER:
      createCluster(action.data, createSuccess, error);
      break;
    default:
      next(action);
  }
};
