import { applyMiddleware } from 'redux';

import ClustersMiddleware from './clusters_middleware';

const masterMiddleware = applyMiddleware(
  ClustersMiddleware
);

export default masterMiddleware;
