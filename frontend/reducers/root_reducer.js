import { combineReducers } from 'redux';
import ClustersReducer from './clusters_reducer';
import ClusterReducer from './cluster_reducer';

const RootReducer = combineReducers({
  clusters: ClustersReducer,
  cluster: ClusterReducer
});

export default RootReducer;
