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
