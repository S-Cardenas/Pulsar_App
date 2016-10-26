export const RECEIVE_CLUSTERS = 'RECEIVE_CLUSTERS';
export const REQUEST_CLUSTERS = 'REQUEST_CLUSTERS';

export const receiveClusters = (clusters) => ({
  type: RECEIVE_CLUSTERS,
  clusters
});

export const requestClusters = () => ({
  type: REQUEST_CLUSTERS
});
