import React from 'react';

class Cluster extends React.Component {

  componentDidMount() {
    this.props.requestCluster(this.props.params.name);
  }

  render() {
    const { cluster } = this.props;
    console.log(cluster);
    return(
      <div className="cluster-detail">
        <div className="clusters-header">
          <h1>
            Cluster Summary
          </h1>
        </div>
        <div className="clusters-details-list group">
          <ul>

            <ul className="cluster-detail-element group">
              <li>Name</li>
              <li>{this.props.params.name}</li>
            </ul>

            <ul className="cluster-detail-element group">
              <li>ServiceURL:</li>
              <li>{cluster.serviceUrl}</li>
            </ul>

            <ul className="cluster-detail-element group">
              <li>ServiceURLTLS:</li>
              <li>{cluster.serviceUrlTls}</li>
            </ul>

          </ul>
        </div>

      </div>
    );
  }

}

export default Cluster;
