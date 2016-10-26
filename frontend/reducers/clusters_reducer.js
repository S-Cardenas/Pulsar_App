import { RECEIVE_CLUSTERS } from '../actions/clusters_actions';

const ClustersReducer = (state = [], action) => {
  let newState = [];
  switch(action.type) {
    case RECEIVE_CLUSTERS:
      action.clusters.forEach(cluster => newState.push(cluster));
      return newState;
    default:
      return state;
  }
};

export default ClustersReducer;
