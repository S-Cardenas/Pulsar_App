//React
import React from 'react';
import ReactDOM from 'react-dom';

//Store and Root Component
import configureStore from './store/store';
import Root from './components/root';

$.ajax({
  type: 'GET',
  dataType: 'JSON',
  url: 'http://localhost:8080/admin/properties/',
  success: function(property) {
    console.log(property);
  },
  error: function() {
    console.log("Didn't find the property.");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
