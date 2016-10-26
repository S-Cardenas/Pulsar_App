export const allClusters = (state) => {
  return state ? state.clusters : [];
};

export const currentCluster = (state) => {
  return state ? state.cluster : {};
};
