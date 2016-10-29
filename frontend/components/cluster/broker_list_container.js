import { connect } from 'react-redux';
import { requestBrokers } from '../../actions/brokers_actions';
import { allBrokers } from '../../reducers/selector.js';
import BrokerList from './broker_list';

const mapStateToProps = (state) => ({
  brokers: allBrokers(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestBrokers: (data) => dispatch(requestBrokers(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrokerList);
