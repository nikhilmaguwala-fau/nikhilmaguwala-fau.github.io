import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Name'
        value={value}
        onChange={handleSearchKey}
        style={{color: '#999999'}}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>
);

export default SearchBar;
