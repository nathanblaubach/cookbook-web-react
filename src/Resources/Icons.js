import React from 'react';

function Menu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="black">
      <line x1="10" y1="11" x2="20" y2="11" />
      <line x1="10" y1="15" x2="20" y2="15" />
      <line x1="10" y1="19" x2="20" y2="19" />
    </svg>
  );
}
function LeftArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="black">
      <polyline points="15,20 10,15 15,10" fill="none" />
      <line x1="10" y1="15" x2="20" y2="15" />
    </svg>
  );
}
function Filter(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="black" fill="none">
      <polygon points="15,16 10,10 20,10 15,16 15,20" />
    </svg>
  );
}

export {
  Menu,
  LeftArrow,
  Filter
}