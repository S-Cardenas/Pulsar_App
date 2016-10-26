import { connect } from 'react-redux';
import { allClusters } from '../../reducers/selector.js';
import { requestClusters } from '../../actions/clusters_actions';
import ClusterList from './clusters_list';


const mapStateToProps = (state) => ({
  clusters: allClusters(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestClusters: () => dispatch(requestClusters())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClusterList);
