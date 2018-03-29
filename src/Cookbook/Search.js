import React from 'react';
import { Filter } from 'react-feather';

function Search(props) {
  return (
    <div className="searchArea">
      <Filter className="icon" onClick={props.onClick} />
      <input id="searchText" className="searchBar" type="textbox" placeholder="Search" onInput={props.onInput} />
    </div>
  );
}

export default Search;