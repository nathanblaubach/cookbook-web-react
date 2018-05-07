import React from 'react';

function LeftArrow(props) {
  return (
    <svg width="30" height="30" onClick={props.onClick}>
      <polyline points="15,25 5,15 15,5" />
      <line x1="5" y1="15" x2="25" y2="15" />
    </svg>
  );
}

function RightArrow(props) {
  return (
    <svg width="30" height="30" onClick={props.onClick}>
      <polyline points="15,25 25,15 15,5" />
      <line x1="5"  y1="15" x2="25" y2="15" />
    </svg>
  );
}

function UpArrow(props) {
  return (
    <svg width="30" height="30" onClick={props.onClick}>
      <polyline points="25,15 15,5 5,15" />
      <line x1="15" y1="5" x2="15" y2="25" />
    </svg>
  );
}

function DownArrow(props) {
  return (
    <svg width="30" height="30" onClick={props.onClick}>
      <polyline points="25,15 15,25 5,15" />
      <line x1="15" y1="5" x2="15" y2="25" />
    </svg>
  );
}

function Menu(props) {
  return (
    <svg width="30" height="30" onClick={props.onClick}>
      <line x1="3" y1="7"  x2="27" y2="7" />
      <line x1="3" y1="15" x2="27" y2="15" />
      <line x1="3" y1="23" x2="27" y2="23" />
    </svg>
  );
}

function Close(props) {
  return (
    <svg width="30" height="30" onClick={props.onClick}>
      <line x1="5" y1="5"  x2="25" y2="25" />
      <line x1="5" y1="25" x2="25" y2="5" />
    </svg>
  );
}

function Filter(props) {
  return (
    <svg width="30" height="30" onClick={props.onClick}>
      <polygon points="7,5 23,5 15,15" />
      <line x1="15" y1="15" x2="15" y2="25" />
    </svg>
  );
}

function Tag(props) {
  return (
    <svg width="30" height="30" onClick={props.onClick}>
      <polygon points="5,5 15,5 25,15 15,25 5,15" />
    </svg>
  );
}

export {
  LeftArrow,
  RightArrow,
  UpArrow,
  DownArrow,
  Menu,
  Close,
  Filter,
  Tag
}