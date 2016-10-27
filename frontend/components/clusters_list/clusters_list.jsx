import React from 'react';
import { Link, hashHistory } from 'react-router';

class ClustersList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clusterName: "",
      serviceUrl: "",
      serviceUrlTls: ""
    };
  }

  componentDidMount() {
    this.props.requestClusters();
  }

  update(property) {
    return e => this.setState({[property] : e.target.value});
  }

  handleSubmit() {
    var name = this.state.clusterName;
    return(e) => {
      e.preventDefault();
      this.props.createCluster(this.state, function(cluster) {
        hashHistory.push({
          pathname: '/clusters/' + name,
          query: {},
          state: {}
        });
      });
    };
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
      <div className="clusters-list animated bounceInLeft">
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

        <div className="create-cluster-container">
          <h1>Create New Cluster</h1>
          <form className="create-cluster-form" onSubmit={this.handleSubmit()}>
            <div className="create-form-row group">
              <label>Cluster Name</label>
              <input
                className="input-text"
                ref="cluster name"
                value={this.state.clusterName}
                placeholder="Insert New Cluster Name"
                onChange={this.update('clusterName')}/>
            </div>


            <br/>


            <div className="create-form-row group">
              <label>Service URL</label>
              <input
                className="input-text"
                ref="service url"
                value={this.state.serviceUrl}
                placeholder="Insert Service URL"
                onChange={this.update('serviceUrl')}/>
            </div>


            <br/>

            <div className="create-form-row group">
              <label>Service URLTls</label>
              <input
                className="input-text"
                ref="service url"
                value={this.state.serviceUrlTls}
                placeholder="Insert Service UrlTls"
                onChange={this.update('serviceUrlTls')}/>
            </div>


            <br/>

            <button type="submit"
                    className="create-cluster-button">
                    Create Cluster
            </button>
          </form>
        </div>

      </div>
    );
  }
}

export default ClustersList;
