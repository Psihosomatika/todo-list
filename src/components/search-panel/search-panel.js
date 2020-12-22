import React from 'react';
import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';

const SearchPanel = () => {
    const searchtext = 'search';
    return (
      <div className="search-panel">
        <input className="search-input"
              placeholder= {searchtext} />
        <ItemStatusFilter />
      </div>
    
  );
};

export default SearchPanel;