import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../../scss/SearchComponent.scss'


const SearchComponent = () => {
    const [isInputVisible, setInputVisible] = useState(false);
    const [query, setQuery] = useState('');
  
    const handleSearchClick = () => {
      setInputVisible(true);
    };
  
    const handleSearch = () => {
      console.log('Search query:', query);
      // Add search functionality here
    };
  
    return (
      <div className="search-container">
        <input
          type="text"
          className={`search-input ${isInputVisible ? 'visible' : ''}`}
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={isInputVisible ? handleSearch : handleSearchClick}>
          <FaSearch />
        </button>
      </div>
    );
  };
  
export default SearchComponent;
