import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  window.store = configureStore();
  ReactDOM.render(<h1>Site Is Up2</h1>, root);
});
