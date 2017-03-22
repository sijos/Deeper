import React from 'react';
import ReactStars from 'react-stars';

const SearchResultItem = ( {resort} ) => {
  return (
    <div className="search-result-item">
      <img className="profile-pic col-1-3" src={resort.profile_pic_url}></img>
      <ul className="name-rating col-1-3">
        <li className="resort-name">{resort.name}</li>
        <li>{resort.country}</li>
        <li>
          <ReactStars size={12} edit={false}
            color2={"#5CCCF0"} value={resort.avg_rating} />
        </li>
      </ul>
      <ul className="address col-1-3">
        <li>{resort.address}</li>
        <li>{resort.city}, {resort.state_province}  {resort.zip}</li>
        <li><a href={resort.website_url}>{resort.website_url}</a></li>
      </ul>
    </div>
  );
};

export default SearchResultItem;
