import { REQUEST_PROPERTIES,
         CREATE_PROPERTY,
         receiveProperties,
         receiveProperty } from '../actions/properties_actions';

import { fetchProperties,
         createProperty } from '../util/api_util';

export default ( { getState, dispatch }) => next => action => {
  const propertiesSuccess = (data) => dispatch(receiveProperties(data));
  const createSuccess = (data) => { action.callback(data);
                                    return dispatch(receiveProperty(data));};
  const error = (e) => console.log(e);

  switch(action.type) {
    case REQUEST_PROPERTIES:
      fetchProperties(propertiesSuccess, error);
      break;
    case CREATE_PROPERTY:
      createProperty(action.data, createSuccess, error);
      break;
    default:
      next(action);
  }
};
