export const allClusters = (state) => {
  return state ? Object.keys(state.clusters).map(key => state.clusters[key]) : [];
};
