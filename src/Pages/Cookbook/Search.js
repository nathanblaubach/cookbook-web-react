import React from 'react';
import { Filter } from '../../Resources/Icons.js';

function Search(props) {
  return (
    <div className="searchArea">
      <span onClick={props.onClick}>
        <Filter className="icon" />
      </span>
      <input id="searchText" type="textbox" placeholder="Search" onInput={props.onInput} />
    </div>
  );
}

export default Search;