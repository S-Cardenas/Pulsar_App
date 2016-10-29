// import {  } from '';
import { RECEIVE_BROKERS } from '../actions/brokers_actions';

const BrokersReducer = (state = [], action) => {
  let newState = [];
  switch(action.type) {
    case RECEIVE_BROKERS:
      action.brokers.forEach(broker => newState.push(broker));
      return newState;
    default:
      return state;
  }
};

export default BrokersReducer;
