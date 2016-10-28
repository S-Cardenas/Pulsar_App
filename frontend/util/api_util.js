export const fetchClusters = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/admin/clusters',
    success,
    error
  });
};

export const fetchCluster = (data, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/admin/clusters/' + data,
    dataType: 'JSON',
    success,
    error
  });
};

export const createCluster = (data, success, error) => {
  $.ajax({
    method: 'PUT',
    url: 'http://localhost:8080/admin/clusters/' + data.clusterName,
    dataType: JSON,
    success,
    error
  });
};

export const fetchProperties = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/admin/properties',
    success,
    error
  });
};

export const fetchProperty = (data, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/admin/properties/' + data,
    dataType: 'JSON',
    success,
    error
  });
};

export const createProperty = (data, success, error) => {
  $.ajax({
    method: 'PUT',
    url: 'http://localhost:8080/admin/properties/' + data.propertyName,
    dataType: JSON,
    success,
    error
  });
};

export const deleteProperty = (data, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: 'http://localhost:8080/admin/properties/' + data,
    dataType: JSON,
    success,
    error
  });
};
