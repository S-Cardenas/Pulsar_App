import React from 'react';
import ClustersListContainer from './clusters_list_container';

const Cluster = ({ children }) => (
  <div className="group">
    <ClustersListContainer />
    {children}
  </div>
);

export default Cluster;
