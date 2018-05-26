import React from 'react';

function Menu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <line x1="10" y1="11" x2="20" y2="11" />
      <line x1="10" y1="15" x2="20" y2="15" />
      <line x1="10" y1="19" x2="20" y2="19" />
    </svg>
  );
}
function LeftArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <polyline points="15,20 10,15 15,10" fill="none" />
      <line x1="10" y1="15" x2="20" y2="15" />
    </svg>
  );
}
function RightArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <polyline points="15,20 20,15 15,10" fill="none" />
      <line x1="10" y1="15" x2="20" y2="15" />
    </svg>
  );
}
function UpArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <polyline points="20,15 15,10 10,15" fill="none" />
      <line x1="15" y1="10" x2="15" y2="20" />
    </svg>
  );
}
function DownArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <polyline points="20,15 15,20 10,15" fill="none" />
      <line x1="15" y1="10" x2="15" y2="20" />
    </svg>
  );
}
function Equals(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <line x1="10" y1="12"  x2="20" y2="12" />
      <line x1="10" y1="18" x2="20" y2="18" />
    </svg>
  );
}
function Plus(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <line x1="10"  y1="15" x2="20" y2="15" />
      <line x1="15" y1="10" x2="15" y2="20" />
    </svg>
  );
}
function Minus(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <line x1="10"  y1="15" x2="20" y2="15" stroke-width="2" />
    </svg>
  );
}
function Times(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <line x1="10" y1="10"  x2="20" y2="20" />
      <line x1="10" y1="20" x2="20" y2="10" />
    </svg>
  );
}
function Divide(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black">
      <line x1="10" y1="20" x2="20" y2="10" />
    </svg>
  );
}
function Filter(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black" fill="none">
      <polygon points="15,16 10,10 20,10 15,16 15,20" />
    </svg>
  );
}
function Tag(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="black" fill="none">
      <polygon points="10,10 15,10 20,15 15,20 10,15" />
    </svg>
  );
}


export {
  Menu,
  LeftArrow,
  RightArrow,
  UpArrow,
  DownArrow,
  Equals,
  Plus,
  Minus,
  Times,
  Divide,
  Filter,
  Tag,
}