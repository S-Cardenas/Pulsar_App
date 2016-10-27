import { applyMiddleware } from 'redux';

import ClustersMiddleware from './clusters_middleware';
import PropertiesMiddleware from './properties_middleware';

const masterMiddleware = applyMiddleware(
  ClustersMiddleware,
  PropertiesMiddleware
);

export default masterMiddleware;
