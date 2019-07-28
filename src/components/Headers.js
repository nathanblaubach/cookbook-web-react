import React    from 'react';
import { Link } from 'react-router-dom';

function BackHeader(props) {
  return React.createElement('header', {},
    React.createElement(Link, {to: '/'},
      React.createElement('img', {
        src: require("../images/left-arrow.svg"),
        alt:"back"
      })
    ),
    React.createElement('span'),
    React.createElement('img', {
      className: 'logo',
      src: require("../images/logo.svg"),
      alt:"logo"
    })
  );
}


function SearchHeader(props) {
  return React.createElement('header', {},
    React.createElement(Link, {to: '/'}, 
      React.createElement('img', {
        src: require("../images/filter.svg"),
        alt:"filter",
        onClick: props.filter_btn_click
      })
    ),
    React.createElement('input', {
      type: 'textbox',
      placeholder: 'Search',
      value: props.searchString,
      onChange: props.updateSearchString
    }),
    React.createElement('img', {
      className: 'logo',
      src: require("../images/logo.svg"),
      alt:"logo"
    })
  );
}

export {
  BackHeader,
  SearchHeader
};

