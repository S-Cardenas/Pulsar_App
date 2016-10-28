import { connect } from 'react-redux';
import { allProperties } from '../../reducers/selector';
import { requestProperties,
         createProperty } from '../../actions/properties_actions';
import PropertyList from './property_list';

const mapStateToProps = (state) => ({
  properties: allProperties(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestProperties: () => dispatch(requestProperties()),
  createProperty: (data, callback) => dispatch(createProperty(data, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyList);
