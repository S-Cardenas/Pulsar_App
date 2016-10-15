console.log('hello');
//
// var request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:8080/clusters', true);
// request.onload = function() {
//   console.log(request.status);
//   console.log(request.responseText);
// };
//
// request.onerror = function() {
//   console.log('this did not fracking work');
// };
//
// request.send();


$.ajax({
  type: 'GET',
  dataType: 'JSONP',
  url: 'http://localhost:8080/clusters',
  xhrFields: {
            withCredentials: true
        },
  success: function(data) {
    console.log(data);
  },
  error: function(e) {
    console.log(e);
    console.log("this didn't work");
  }
});
