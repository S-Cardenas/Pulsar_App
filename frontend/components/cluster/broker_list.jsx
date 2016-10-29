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
        <div className="brokers-item group" key={i}>
          <ul>
            <li className="brokers-item-name">
              <Link to={"/"}>
                {broker}
              </Link>
            </li>
          </ul>
        </div>
      );
    });
    return(
      <div className="brokers-detail animated bounceInRight">

        <div className="brokers-header">
          <h1>
            Brokers
          </h1>
        </div>

        <div className="brokers-content">
          {list}
        </div>

      </div>
    );
  }
}

export default BrokerList;
