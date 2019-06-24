import React    from 'react';
import { Link } from 'react-router-dom';

function BackHeader(props) {
  return (
    <header>
      <Link to={"/"}><img src={require("../images/left-arrow.svg")} alt="logo"/></Link>
      <span></span>
      <img className={"logo"} src={require("../images/logo.svg")} alt="logo"/>
    </header>
  );
}

function SearchHeader(props) {
  return (
    <header>
      <img onClick={ props.filter_btn_click } src={require("../images/filter.svg")} alt="logo"/>
      <input type="textbox" placeholder="Search" value={props.searchString} onChange={props.updateSearchString} />
      <img className={"logo"} src={require("../images/logo.svg")} alt="logo"/>
    </header>
  );
}

export {
  BackHeader,
  SearchHeader
};

