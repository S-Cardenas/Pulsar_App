import React from 'react';

class Property extends React.Component {

  componentDidMount() {
    this.props.requestProperty(this.props.params.name);
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

      </div>
    );
  }
}

export default Property;
