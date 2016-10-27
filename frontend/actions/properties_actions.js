export const REQUEST_PROPERTIES = 'REQUEST_PROPERTIES';
export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';

export const requestProperties = () => ({
  type: REQUEST_PROPERTIES
});

export const receiveProperties = (properties) => ({
  type: RECEIVE_PROPERTIES,
  properties
});
