//React
import React from 'react';
import ReactDOM from 'react-dom';

//Store and Root Component
import configureStore from './store/store';
import Root from './components/root';

//Import Master Style
// import style from './style/style';

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
