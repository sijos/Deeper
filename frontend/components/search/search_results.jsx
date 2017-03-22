import React from 'react';
import SearchResultItem from './search_result_item';
import { hashHistory } from 'react-router';

const routeToResort = (id) => {
  return (e) => {
    hashHistory.push(`/resorts/${id}`);
  };
};

const SearchResults = ({ resorts }) => {
  if (resorts.length === 0) {
    return(
      <ul className="search-results-index">
        <li className="no-results">
          No resorts found! Try searching again.</li>
      </ul>
    );
  } else {
    return(
      <ul className="search-results-index">
        {resorts.map((resort) =>
          <li key={resort.id} onClick={routeToResort(resort.id)}>
            <SearchResultItem resort={resort}/>
          </li>
        )}
      </ul>
    );
  }
};

export default SearchResults;
