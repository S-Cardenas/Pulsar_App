import { REQUEST_PROPERTIES } from '../actions/properties_actions';

export default ( { getState, dispatch }) => next => action => {
  const propertiesSuccess = (data) => dispatch(receiveProperties(data));

  switch(action.type) {
    case REQUEST_PROPERTIES:
      break;
    default:
      next(action);
  }
};
