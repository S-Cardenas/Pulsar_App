export const REQUEST_PROPERTIES = 'REQUEST_PROPERTIES';
export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';
export const CREATE_PROPERTY = 'CREATE_PROPERTY';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';

export const requestProperties = () => ({
  type: REQUEST_PROPERTIES

});
export const receiveProperties = (properties) => ({
  type: RECEIVE_PROPERTIES,
  properties
});

export const receiveProperty = (property) => ({
  type: RECEIVE_PROPERTY,
  property
});

export const createProperty = (data, callback) => ({
  type: CREATE_PROPERTY,
  data,
  callback
});
