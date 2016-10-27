import { REQUEST_PROPERTIES,
         receiveProperties } from '../actions/properties_actions';

import { fetchProperties } from '../util/api_util';

export default ( { getState, dispatch }) => next => action => {
  const propertiesSuccess = (data) => dispatch(receiveProperties(data));
  const error = (e) => console.log(e);

  switch(action.type) {
    case REQUEST_PROPERTIES:
      fetchProperties(propertiesSuccess, error);
      break;
    default:
      next(action);
  }
};
