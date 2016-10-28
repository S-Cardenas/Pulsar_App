import React from 'react';
import { hashHistory } from 'react-router';

class Property extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        adminRoles: "",
        clusters: ""
    };
    this.deleteProperty = this.deleteProperty.bind(this);
  }

  componentDidMount() {
    this.props.requestProperty(this.props.params.name);
  }

  updateState(property) {
    return e => this.setState({[property] : e.target.value});
  }

  updateProperty() {

  }

  deleteProperty() {
    var name = this.props.params.name;
    this.props.deleteProperty(name);
    hashHistory.push({
      pathname: '/properties/',
      query: {},
      state: {}
    });
  }

  render() {
    const { property } = this.props;
    var i = 0,
        j = 0;
    if (property.adminRoles) {
      var adminRoles = property.adminRoles.map(adminRole => {
        i++;
        return(
          <li className="admin-role" key={i}>
            {adminRole}
          </li>
        );
      });
    }

    if (property.allowedClusters) {
      j++;
      var allowedClusters = property.allowedClusters.map(cluster => {
        return(
          <li className="admin-role" key={j}>
            {cluster}
          </li>
        );
      });
    }
    return(
      <div className="property-detail animated bounceInRight">

        <div className="property-header">
          <h1>
            Property Summary
          </h1>
        </div>

        <div className="property-details-list group">
          <ul>

            <ul className="property-detail-element group">
              <li>Name</li>
              <li>{this.props.params.name}</li>
            </ul>

            <ul className="property-detail-element group">
              <li>Admin Roles:</li>
              <ul>{adminRoles}</ul>
            </ul>

            <ul className="property-detail-element group">
              <li>Active Clusters:</li>
              <ul>{allowedClusters}</ul>
            </ul>

          </ul>
        </div>

        <div className="create-container">
          <h1>Update Property</h1>
          <form className="create-form" onSubmit={this.updateProperty()}>
            <div className="create-form-row group">
              <label>Admin Roles</label>
              <input
                className="input-text"
                ref="property name"
                value={this.state.adminRoles}
                placeholder="admin-update-1"
                onChange={this.updateState('adminRoles')}/>
            </div>

            <br/>

            <div className="create-form-row group">
              <label>Active Clusters</label>
              <input
                className="input-text"
                ref="property name"
                value={this.state.clusters}
                placeholder="cl1, cl2"
                onChange={this.updateState('clusters')}/>
            </div>

            <br/>

            <button type="submit"
                    className="create-button">
                    Update Property
            </button>
          </form>

        </div>
        <button type="submit"
                className="delete-button"
                onClick={this.deleteProperty}>
                Delete Property
        </button>
      </div>
    );
  }
}

export default Property;
