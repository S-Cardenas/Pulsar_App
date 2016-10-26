import { REQUEST_CLUSTERS,
         receiveClusters } from '../actions/clusters_actions';

import { fetchClusters } from '../util/api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const clustersSuccess = (data) => dispatch(receiveClusters(data));
  const error = (e) => console.log(e);

  switch( action.type ) {
    case REQUEST_CLUSTERS:
      fetchClusters(clustersSuccess, error);
      break;
    default:
      next(action);
  }
};
