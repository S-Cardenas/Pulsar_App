import { REQUEST_BROKERS,
         receiveBrokers } from '../actions/brokers_actions';

import { fetchBrokers } from '../util/api_util';

export default ({ getState, dispatch }) => next => action => {
  const brokersSuccess = (data) => dispatch(receiveBrokers(data));
  const error = (e) => console.log(e);

  switch(action.type) {
    case REQUEST_BROKERS:
      fetchBrokers(action.data, brokersSuccess, error);
      break;
    default:
      next(action);
  }
};
