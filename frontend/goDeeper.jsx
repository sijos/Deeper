import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchResort } from './actions/resort_actions'; //for testing
import { selectHomeResorts } from './reducers/selectors'; //for testing
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  window.store = store; //for testing, remove later
  ReactDOM.render(<Root store={store} />, root);
});

window.fetchResort = fetchResort; //for testing, remove later
window.selectHomeResorts = selectHomeResorts; // for testing
