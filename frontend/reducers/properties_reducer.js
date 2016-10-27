import { RECEIVE_PROPERTIES } from '../actions/properties_actions';

const PropertiesReducer = (state = [], action ) => {
  let newState = [];
  switch(action.type) {
    case RECEIVE_PROPERTIES:
      action.properties.forEach(property => newState.push(property));
      return newState;
    default:
      return state;
  }
};

export default PropertiesReducer;
