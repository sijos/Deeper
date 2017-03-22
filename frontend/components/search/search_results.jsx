import React from 'react';

const SearchResults = ({ resorts }) => (
  <section className="search-results-container">
    <div className="search-results-index">
      <ul>
        {resorts.map((resort) =>
          <li key={resort.id}>{resort.name}</li>
        )}
      </ul>
    </div>
  </section>
);

export default SearchResults;
