import React from 'react';
import { Link } from 'react-router';

class BrokerList extends React.Component {

  componentDidMount() {
    this.props.requestBrokers(this.props.params.name);
  }

  render() {
    const { brokers } = this.props;
    var i = 0;
    var list = brokers.map(broker => {
      i++;
      return(
        <div className="cluster-item group" key={i}>
          <ul>
            <li className="cluster-item-name">
              <Link to={"/"}>
                {broker}
              </Link>
            </li>
          </ul>
        </div>
      );
    });
    return(
      <div className="cluster-detail animated bounceInRight">

        <div className="clusters-header">
          <h1>
            Brokers
          </h1>
        </div>

        <div className="clusters-content">
          {list}
        </div>

      </div>
    );
  }
}

export default BrokerList;
