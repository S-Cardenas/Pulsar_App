import { applyMiddleware } from 'redux';

import ClustersMiddleware from './clusters_middleware';
import PropertiesMiddleware from './properties_middleware';
import BrokersMiddleware from './broker_middleware';

const masterMiddleware = applyMiddleware(
  ClustersMiddleware,
  PropertiesMiddleware,
  BrokersMiddleware
);

export default masterMiddleware;
