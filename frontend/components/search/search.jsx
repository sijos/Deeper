import React from 'react';
import SearchMap from './search_map';
import SearchResults from './search_results';

const Search = ({ resorts, fetchResorts }) => (
    <div>
      <SearchMap resorts={resorts} />
      <SearchResults resorts={resorts} fetchResorts={fetchResorts} />
    </div>
);

export default Search;
