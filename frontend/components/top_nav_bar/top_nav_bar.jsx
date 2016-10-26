import React from 'react';
import { hashHistory } from 'react-router';

class TopNavBar extends React.Component {
  render() {
    return (
      <div className="top-nav-bar group">
        <img className="logo-image" src="./assets/images/pulsar.png" alt=""/>
        <ul className="nav-links">
          <li>
            Property
          </li>
          <li>
            Cluster
          </li>
          <li>
            Namespace
          </li>
          <li>
            Topic
          </li>
          <li>
            Broker
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNavBar;
