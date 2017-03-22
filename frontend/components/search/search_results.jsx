import React from 'react';
import SearchResultItem from './search_result_item';
import { hashHistory } from 'react-router';

const routeToResort = (id) => {
  return (e) => {
    hashHistory.push(`/resorts/${id}`);
  };
};

const SearchResults = ({ resorts }) => (
  <ul className="search-results-index">
    {resorts.map((resort) =>
      <li key={resort.id} onClick={routeToResort(resort.id)}>
        <SearchResultItem resort={resort}/>
      </li>
    )}
  </ul>
);

export default SearchResults;
