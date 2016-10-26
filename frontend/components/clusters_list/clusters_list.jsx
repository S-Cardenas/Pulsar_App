import React from 'react';
import { Link } from 'react-router';

class ClustersList extends React.Component {

  componentDidMount() {
    this.props.requestClusters();
  }

  render() {
    const { clusters } = this.props;
    var i = 0;
    var list = clusters.map(cluster => {
      i++;
      return(
        <div className="cluster-item group" key={i}>
          <ul>
            <li className="cluster-item-name">
              <Link to={"/clusters/" + cluster}>
                {cluster}
              </Link>
            </li>
          </ul>
        </div>
      );
    });

    return(
      <div className="clusters-list">
        <div className="clusters-header">
          <h1>Clusters</h1>
        </div>
        <div className="clusters-columns group">
          <ul>
            <li>Active</li>
            <li>Operations</li>
            <li>Version</li>
          </ul>
        </div>
        <div className="clusters-content">
          {list}
        </div>
      </div>
    );
  }
}

export default ClustersList;
