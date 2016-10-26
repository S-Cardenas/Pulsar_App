import React from 'react';

class Cluster extends React.Component {

  componentDidMount() {
    this.props.requestCluster(this.props.params.name);
  }

  render() {
    const { cluster } = this.props;
    console.log(cluster);
    return(
      <div>Cluster Component</div>
    );
  }

}

export default Cluster;
