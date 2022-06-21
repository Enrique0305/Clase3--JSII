import React from 'react';
import '../styles/TodoSearch.css';
import { AppContext } from '../Context/AppContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Search"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
