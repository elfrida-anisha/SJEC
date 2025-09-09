// Updated SearchBar.js with Search Icon
import React from "react";
import './SearchBar.css'; // Import the styling

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Optional: Search icon */}
      <i className="fa fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;
