import { RECEIVE_CLUSTER } from '../actions/clusters_actions';

const ClusterReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case(RECEIVE_CLUSTER):
      newState = action.cluster;
      return newState;
    default:
      return state;
  }
};

export default ClusterReducer;
