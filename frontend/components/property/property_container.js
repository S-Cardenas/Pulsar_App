import { connect } from 'react-redux';
import { requestProperty } from '../../actions/properties_actions';
import { currentProperty } from '../../reducers/selector';
import Property from './property';

const mapStateToProps = (state) => ({
  property: currentProperty(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestProperty: (data) => dispatch(requestProperty(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Property);
