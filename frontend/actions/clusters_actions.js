export const RECEIVE_CLUSTERS = 'RECEIVE_CLUSTERS';
export const REQUEST_CLUSTERS = 'REQUEST_CLUSTERS';
export const RECEIVE_CLUSTER = 'RECEIVE_CLUSTER';
export const REQUEST_CLUSTER = 'REQUEST_CLUSTER';
export const CREATE_CLUSTER = 'CREATE_CLUSTER';
export const DELETE_CLUSTER = 'DELETE_CLUSTER';

export const receiveClusters = (clusters) => ({
  type: RECEIVE_CLUSTERS,
  clusters
});

export const receiveCluster = (cluster) => ({
  type: RECEIVE_CLUSTER,
  cluster
});

export const requestClusters = () => ({
  type: REQUEST_CLUSTERS
});

export const requestCluster = (data) =>({
  type: REQUEST_CLUSTER,
  data
});

export const createCluster = (data, callback) => ({
  type: CREATE_CLUSTER,
  data,
  callback
});

export const deleteCluster = ( data ) => ({
  type: DELETE_CLUSTER,
  data
});
