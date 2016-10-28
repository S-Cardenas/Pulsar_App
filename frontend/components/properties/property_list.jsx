import React from 'react';
import { Link, hashHistory } from 'react-router';

class PropertyList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        propertyName: "",
    };
  }

  componentDidMount() {
    this.props.requestProperties();
  }

  update(property) {
    return e => this.setState({[property] : e.target.value});
  }

  handleSubmit() {
    var name = this.state.propertyName;
    return(e) => {
      e.preventDefault();
      this.props.createProperty(this.state, function(property) {
        hashHistory.push({
          pathname: '/properties/' + name,
          query: {},
          state: {}
        });
      });
    };
  }

  render() {
    const { properties } = this.props;
    var i = 0;
    var list = properties.map(property => {
      i++;
      return(
        <div className="properties-item group" key={i}>
          <ul>
            <li className="properties-item-name">
              <Link to={"/properties/" + property}>
                {property}
              </Link>
            </li>
          </ul>
        </div>
      );
    });
    return (
      <div className="properties-list animated bounceInLeft">
        <div className="properties-header">
          <h1>Properties</h1>
        </div>

        <div className="properties-content">
          {list}
        </div>

        <div className="create-properties-container">
          <h1>Create New Property</h1>
          <form className="create-property-form" onSubmit={this.handleSubmit()}>
            <div className="create-form-row group">
              <label>Property Name</label>
              <input
                className="input-text"
                ref="property name"
                value={this.state.propertyName}
                placeholder="John's Property"
                onChange={this.update('propertyName')}/>
            </div>


            <br/>

            <button type="submit"
                    className="create-properties-button">
                    Create Property
            </button>
          </form>
        </div>

      </div>


    );
  }
}

export default PropertyList;
