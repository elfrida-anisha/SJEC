
import React from "react";
import './SearchBar.css'; 

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     
      <i className="fa fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;
