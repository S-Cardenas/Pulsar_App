import React from 'react';

class Property extends React.Component {

  componentDidMount() {
    this.props.requestProperty(this.props.params.name);
  }

  render() {
    const { property } = this.props;
    return(
      <div>blakfdl;ajnklfas</div>
    );
  }
}

export default Property;
