import { RECEIVE_PROPERTY } from '../actions/properties_actions';

const PropertyReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case(RECEIVE_PROPERTY):
      newState = action.property;
      return newState;
    default:
      return state;
  }
};

export default PropertyReducer;
