import React from 'react';
import { hashHistory } from 'react-router';

class TopNavBar extends React.Component {
  render() {
    return (
      <div className="top-nav-bar group">
        <h1 className='main-title'>
          Pulsar App
        </h1>
        <ul className="nav-links">
          <li>
            Property
          </li>
          <li>
            Cluster
          </li>
            Namespace
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
