import React from 'react';
import PropertiesListContainer from './properties_list_container';

const Properties = ({ children }) => (
  <div className="group">
    <PropertiesListContainer />
    {children}
  </div>
);

export default Properties;
