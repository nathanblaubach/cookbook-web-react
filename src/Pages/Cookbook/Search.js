import React from 'react';
import { Filter } from '../../Resources/Icons.js';

function Search(props) {
  return (
    <div className="searchArea">
      <Filter className="icon" onClick={props.onClick} />
      <input id="searchText" type="textbox" placeholder="Search" onInput={props.onInput} />
    </div>
  );
}

export default Search;