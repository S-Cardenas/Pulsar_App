import React from 'react';
import { hashHistory, Link } from 'react-router';

class TopNavBar extends React.Component {
  render() {
    return (
      <div className="top-nav-bar group">
        <Link to={"/"}>
          <img className="logo-image" src="./assets/images/pulsar.png" alt=""/>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to={"/property"}>
              Property
            </Link>
          </li>
          <li>
            <Link to={"/clusters"}>
              Cluster
            </Link>
          </li>
          <li>
            <Link to={"/namespace"}>
              Namespace
            </Link>
          </li>
          <li>
            <Link to={"/topic"}>
              Topic
            </Link>
          </li>
          <li>
            <Link to={"/broker"}>
              Broker
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNavBar;
