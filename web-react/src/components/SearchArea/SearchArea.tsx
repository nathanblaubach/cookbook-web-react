import React, { useState } from "react";
import filterImage from '../../assets/filter.svg';
import './SearchArea.css';

type SearchAreaProps = {
  children: React.ReactNode,
  searchString: string,
  onSearchStringChange: (searchString: string) => void,
};

export function SearchArea({ children, searchString, onSearchStringChange }: SearchAreaProps): React.JSX.Element {

  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <div className="search-area">
      <img
        src={filterImage}
        alt="Filter Area Expansion Button"
        onClick={() => setShowFilters(!showFilters)} />
      <input
        className="search-bar"
        type="textbox"
        aria-label="Recipe Search Bar"
        placeholder="Search"
        value={searchString}
        onChange={(event) => onSearchStringChange(event.target.value)} />
      {showFilters && children}
    </div>
  );

}
