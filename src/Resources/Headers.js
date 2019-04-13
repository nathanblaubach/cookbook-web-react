import React from 'react';
import { Link }   from 'react-router-dom';
import { Filter, LeftArrow } from './Icons';

function BackHeader(props) {
  return (
    <header>
      <Link to={"/"}><LeftArrow /></Link>
      <img src={require("./logo/logo-white-small.png")} alt="logo"/>
      <span></span>
    </header>
  );
}
  
function SearchHeader(props) {
  const btn_style = {
    margin: 0,
    padding: 0,
    background: 'transparent',
    border: 'none'
  };
  return (
    <header>
      <button style={btn_style} onClick={ props.filter_btn_click } ><Filter /></button>
      <input type="textbox" placeholder="Search" value={props.searchString} onChange={props.updateSearchString} />
      <img src={require("./logo/logo-white-small.png")} alt="logo"/>
    </header>
  );
}

export {
  BackHeader,
  SearchHeader
};
