import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser, errors: []} };
    //TODO remove errors from preloaded state after forms are setup
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.store = store; //for testing, remove later
  ReactDOM.render(<Root store={store} />, root);
});

window.login = login; //for testing, remove later
