import React from 'react';
import { Link, hashHistory } from 'react-router';

class PropertyList extends React.Component {


  componentDidMount() {
    this.props.requestProperties();
  }

  render() {
    const { properties } = this.props;
    return (
      <div>these are the properties biatch</div>
    );
  }
}

export default PropertyList;
