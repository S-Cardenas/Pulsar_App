export const fetchClusters = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/admin/clusters',
    success,
    error
  });
};
