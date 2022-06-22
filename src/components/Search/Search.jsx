import React from 'react';
import "./Search.css";

function Search({ value, onChange }) {

  return (
    <div className="search__form">
    <input
        className="search__input"
        type="search"
        placeholder="Поиск..."
        value={value}
        onChange={onChange}
    />
</div>
  )
}

export default Search;

