export const allClusters = (state) => {
  return state ? state.clusters : [];
};

export const currentCluster = (state) => {
  return state ? state.cluster : {};
};

export const allProperties = (state) => {
  return state ? state.properties : [];
};

export const currentProperty = (state) => {
  return state ? state.property : {};
};

export const allBrokers = (state) => {
  return state ? state.brokers : [];
};
