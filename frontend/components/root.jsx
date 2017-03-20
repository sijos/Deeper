import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from  './home/home';
import SearchContainer from './search/search_container';
import ResortDetailContainer from './resort/resort_detail_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/resorts" component={ SearchContainer } />
        <Route path="/resorts/:resortId" component={ ResortDetailContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
