import React from 'react';
import { hashHistory, Link } from 'react-router';

class Cluster extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        serviceUrl: "",
        serviceUrlTls: ""
    };
    this.deleteCluster = this.deleteCluster.bind(this);
  }

  componentDidMount() {
    this.props.requestCluster(this.props.name);
  }

  updateState(property) {
    return e => this.setState({[property] : e.target.value});
  }

  updateCluster() {
    console.log("Updating a cluster doesn't work yet. Please check back later");
  }

  deleteCluster() {
    var cluster = this.props.name;
    this.props.deleteCluster(cluster);
    hashHistory.push({
      pathname: '/clusters/',
      query: {},
      state: {}
    });
  }

  viewBrokers() {

  }

  render() {
    const { cluster } = this.props;
    return(
      <div className="cluster-detail animated bounceInRight">

        <div className="clusters-header">
          <h1>
            Cluster Summary
          </h1>
        </div>

        <div className="clusters-details-list group">
          <ul>

            <ul className="cluster-detail-element group">
              <li>Name</li>
              <li>{this.props.name}</li>
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

        <div className="update-container">
          <h1>Update Cluster</h1>
          <form className="update-form" onSubmit={this.updateCluster}>
            <div className="update-form-row group">
              <label>ServiceURL</label>
              <input
                className="input-text"
                ref="property name"
                value={this.state.serviceUrl}
                placeholder="admin-update-1"
                onChange={this.updateState('serviceUrl')}/>
            </div>

            <br/>

            <div className="update-form-row group">
              <label>ServiceURLTLS</label>
              <input
                className="input-text"
                ref="property name"
                value={this.state.serviceUrlTls}
                placeholder="cl1, cl2"
                onChange={this.updateState('serviceUrlTls')}/>
            </div>

            <br/>

            <button type="submit"
                    className="update-button">
                    Update Cluster
            </button>
          </form>

        </div>

        <button type="submit"
                className="delete-button"
                onClick={this.deleteCluster}>
                Delete Cluster
        </button>

        <Link to={"/clusters/" + this.props.name + '/brokers' }>
          <button type="submit"
                  className="delete-button">
                  View Brokers
          </button>
        </Link>


      </div>
    );
  }

}

export default Cluster;
