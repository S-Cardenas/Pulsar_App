import { REQUEST_PROPERTIES,
         REQUEST_PROPERTY,
         CREATE_PROPERTY,
         DELETE_PROPERTY,
         receiveProperties,
         receiveProperty,
         requestProperties } from '../actions/properties_actions';

import { fetchProperties,
         fetchProperty,
         createProperty,
         deleteProperty } from '../util/api_util';

export default ( { getState, dispatch }) => next => action => {
  const propertiesSuccess = (data) => dispatch(receiveProperties(data));
  const propertySuccess = (data) => dispatch(receiveProperty(data));
  const createSuccess = (data) => { action.callback(data);
                                    return dispatch(requestProperties());};
  const error = (e) => console.log(e);
  const success = (e) => dispatch(requestProperties());

  switch(action.type) {
    case REQUEST_PROPERTIES:
      fetchProperties(propertiesSuccess, error);
      break;
    case REQUEST_PROPERTY:
      fetchProperty(action.data, propertySuccess, error);
      break;
    case CREATE_PROPERTY:
      createProperty(action.data, createSuccess, error);
      break;
    case DELETE_PROPERTY:
      deleteProperty(action.data, success, error);
      break;
    default:
      next(action);
  }
};
