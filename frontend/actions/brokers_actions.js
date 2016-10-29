export const REQUEST_BROKERS = 'REQUEST_BROKERS';
export const RECEIVE_BROKERS = 'RECIEVE_BROKERS';

export const requestBrokers = (data) => ({
  type: REQUEST_BROKERS,
  data: data
});

export const receiveBrokers = (brokers) => ({
  type: RECEIVE_BROKERS,
  brokers
});
