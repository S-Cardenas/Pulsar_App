import { connect } from 'react-redux';
import { requestCluster } from '../../actions/clusters_actions';
import { currentCluster } from '../../reducers/selector';
import Cluster from './cluster';

const mapStateToProps = (state) => ({
  cluster: currentCluster(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestCluster: (data) => dispatch(requestCluster(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cluster);
