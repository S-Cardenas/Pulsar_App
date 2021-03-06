import { REQUEST_CLUSTERS,
         REQUEST_CLUSTER,
         CREATE_CLUSTER,
         DELETE_CLUSTER,
         receiveCluster,
         receiveClusters,
         requestClusters } from '../actions/clusters_actions';

import { fetchClusters,
         fetchCluster,
         createCluster,
         deleteCluster } from '../util/api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const clustersSuccess = (data) => dispatch(receiveClusters(data));
  const clusterSuccess = (data) => dispatch(receiveCluster(data));
  const createSuccess = (data) => { action.callback(data);
                                    return dispatch(requestClusters(data));};
  const deleteSuccess = (data) => dispatch(requestClusters());
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
    case DELETE_CLUSTER:
      deleteCluster(action.data, deleteSuccess, error);
      break;
    default:
      next(action);
  }
};
