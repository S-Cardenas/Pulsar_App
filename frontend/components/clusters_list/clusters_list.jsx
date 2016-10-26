import React from 'react';

class ClustersList extends React.Component {

  componentDidMount() {
    this.props.requestClusters();
  }

  render() {
    return(
      <div>
        This is the clusters list.
      </div>
    );
  }
}

export default ClustersList;
