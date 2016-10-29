import React from 'react';
import ClusterContainer from './cluster_container';

class Cluster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="group">
          <ClusterContainer name={this.props.params.name} />
          {this.props.children}
        </div>
    );
  }
}

export default Cluster;
