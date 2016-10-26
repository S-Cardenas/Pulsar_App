import { combineReducers } from 'redux';
import ClustersReducer from './clusters_reducer';

const RootReducer = combineReducers({
  clusters: ClustersReducer
});

export default RootReducer;
