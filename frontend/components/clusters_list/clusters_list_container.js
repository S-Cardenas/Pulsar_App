import { connect } from 'react-redux';
import { allClusters } from '../../reducers/selector.js';
import { requestClusters,
         createCluster} from '../../actions/clusters_actions';
import ClusterList from './clusters_list';


const mapStateToProps = (state) => ({
  clusters: allClusters(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestClusters: () => dispatch(requestClusters()),
  createCluster: (data, callback) => dispatch(createCluster(data, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClusterList);
