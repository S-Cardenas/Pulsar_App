import { RECEIVE_CLUSTERS } from '../actions/clusters_actions';

const ClustersReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_CLUSTERS:
      console.log(action.clusters);
      return newState;
    default:
      return state;
  }
};

export default ClustersReducer;
