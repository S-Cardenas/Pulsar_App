import { combineReducers } from 'redux';
import ClustersReducer from './clusters_reducer';
import ClusterReducer from './cluster_reducer';
import PropertiesReducer from './properties_reducer';
import PropertyReducer from './property_reducer';
import BrokersReducer from './brokers_reducer';

const RootReducer = combineReducers({
  clusters: ClustersReducer,
  cluster: ClusterReducer,
  properties: PropertiesReducer,
  property: PropertyReducer,
  brokers: BrokersReducer
});

export default RootReducer;
