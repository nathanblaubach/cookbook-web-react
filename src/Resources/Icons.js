import React from 'react';

function LeftArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polyline points="15,25 5,15 15,5" fill="none" stroke-width="2" />
      <line x1="5" y1="15" x2="25" y2="15" stroke-width="2" />
    </svg>
  );
}
function RightArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polyline points="15,25 25,15 15,5" fill="none" stroke-width="2" />
      <line x1="5"  y1="15" x2="25" y2="15" stroke-width="2" />
    </svg>
  );
}
function UpArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polyline points="25,15 15,5 5,15" fill="none" stroke-width="2" />
      <line x1="15" y1="5" x2="15" y2="25" stroke-width="2" />
    </svg>
  );
}
function DownArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polyline points="25,15 15,25 5,15" fill="none" stroke-width="2" />
      <line x1="15" y1="5" x2="15" y2="25" stroke-width="2" />
    </svg>
  );
}
function Plus(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <line x1="5"  y1="15" x2="25" y2="15" stroke-width="2" />
      <line x1="15" y1="5" x2="15" y2="25" stroke-width="2" />
    </svg>
  );
}
function Minus(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <line x1="5"  y1="15" x2="25" y2="15" stroke-width="2" />
    </svg>
  );
}
function Times(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <line x1="5" y1="5"  x2="25" y2="25" stroke-width="2" />
      <line x1="5" y1="25" x2="25" y2="5" stroke-width="2" />
    </svg>
  );
}
function Divide(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <line x1="5" y1="25" x2="25" y2="5" stroke-width="2" />
    </svg>
  );
}
function Equals(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <line x1="3" y1="10"  x2="27" y2="10" stroke-width="2" />
      <line x1="3" y1="20" x2="27" y2="20" stroke-width="2" />
    </svg>
  );
}
function Menu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <line x1="3" y1="7"  x2="27" y2="7"  stroke-width="2" />
      <line x1="3" y1="15" x2="27" y2="15" stroke-width="2" />
      <line x1="3" y1="23" x2="27" y2="23" stroke-width="2" />
    </svg>
  );
}
function Filter(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="15,15 7,5 23,5 15,15 15,25" fill="none" stroke-width="2" />
    </svg>
  );
}
function Tag(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 15,5 25,15 15,25 5,15" fill="none" stroke-width="2" />
    </svg>
  );
}
function Circle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <circle cx="15" cy="15" r="10" fill="none" stroke-width="2" />
    </svg>
  );
}
function Square(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
    </svg>
  );
}
function HorizontalRectangle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,7 25,7 25,23 5,23" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
    </svg>
  );
}
function VerticalRectangle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="7,5 23,5 23,25 7,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
    </svg>
  );
}
function Mail(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,7 25,7 25,23 5,23" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <polyline points="5,7 15,15 25,7" fill="none" stroke-width="1" />
    </svg>
  );
}
function Calendar(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,7 25,7 25,23 5,23" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <line x1="10" y1="4" x2="10" y2="7" stroke-width="1" />
      <line x1="20" y1="4" x2="20" y2="7" stroke-width="1" />
      <line x1="5" y1="12" x2="25" y2="12" stroke-width="1" />
    </svg>
  );
}
function Keep(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <circle cx="15"  cy="13" r="4" fill="none" stroke-width="1" />
      <polyline points="13.5,19 16.5,19" fill="none" stroke-width="1" />
      <polyline points="13.5,17 13.5,20.5 16.5,20.5 16.5,17" fill="none" stroke-width="1" />
    </svg>
  );
}
function Drive(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <polygon points="9,20 15,9 21,20" stroke-linecap="square" stroke-linejoin="bevel" fill="none" stroke-width="3.5" />
    </svg>
  );
}
function Instagram(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <circle cx="15"  cy="15" r="4" fill="none" stroke-width="2" />
      <circle cx="21"  cy="9" r=".5" fill="none" stroke-width="1" />
    </svg>
  );
}
function Facebook(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <line x1="12" y1="16" x2="22" y2="16" stroke-width="2.5" />
      <path d="M17 25 L17 13 Q17 10, 22 10" fill="none" stroke-width="2.5" />
    </svg>
  );
}
function Twitter(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <path d="M15 13.5 Q10.65 12 10.5 11.25 Q10 13 11.5 14 L10.5  13.8 Q11 16 12.5 16 L11 15.85 Q12  17.25 13  17.25 Q10.5  18.25 10  18.25 Q20 20 19 13 L20 11.75 L19 12 L19.75 11 L18.5 11.5 Q16 9.5 15 13.5" stroke-width=".01" />
    </svg>
  );
}
function LinkedIn(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <line x1="10" y1="9" x2="10" y2="11.5" stroke-width="2.5" />
      <line x1="10" y1="13" x2="10" y2="21" stroke-width="2.5" />
      <path d="M15 21 L15 15 Q15 14, 17.5 14 Q20 14, 20 15 L 20 21" fill="none" stroke-width="2.5" />
    </svg>
  );
}
function Codepen(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <polygon points="9,13 15,9  21,13 15,17" fill="none" stroke-width="1.5" />
      <polygon points="9,17 15,13 21,17 15,21" fill="none" stroke-width="1.5" />
      <line x1="8.25" y1="13" x2="8.25" y2="17" stroke-width="1.5" />
      <line x1="15" y1="9"  x2="15" y2="13" stroke-width="1.5" />
      <line x1="15" y1="17" x2="15" y2="21" stroke-width="1.5" />
      <line x1="21.75" y1="13" x2="21.75" y2="17" stroke-width="1.5" />
    </svg>
  );
}
function GitHub(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <path d="M13 21 L13 18 Q13 17 15 17 Q17 17 17 18 L17 21" stroke-width=".01" />
      <ellipse cx="15" cy="14" rx="4.5" ry="3.3" stroke-width=".01" />
      <polyline points="11.5,13 11.5,10.5 14,12" stroke-linejoin="round" stroke-width="1" />
      <polyline points="18.5,13 18.5,10.5 16,12" stroke-linejoin="round" stroke-width="1" />
      <path d="M14 19.5 Q10 19 10 17.5" fill="none" stroke-linecap="round" stroke-width="1" />
    </svg>
  );
}
function Pocket(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <path d="M9 11 L21 11 Q21 19, 15 19 Q9 19, 9 11"  stroke-linecap="round" stroke-linejoin="round" fill="none"  stroke-width="2" />
      <polyline points="13,14 15,16 17,14"  stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="1" />
    </svg>
  );
}
function Simplenote(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">    
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <circle cx="15" cy="15" r="7" fill="none" stroke-width="2" />
      <path d="M14 8 Q9.5 10 15 15 Q20.5 20 16 22" fill="none" stroke-width="2" />
    </svg>
  );
}
function Dropbox(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60" stroke="black">    
      <polygon points="5,5 25,5 25,25 5,25" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="2" />
      <polygon points="9,12 12,14 15,12 12,10" stroke-width=".1" />
      <polygon points="15,12 18,14 21,12 18,10" stroke-width=".1" />
      <polygon points="9,16 12,18 15,16 12,14" stroke-width=".1" />
      <polygon points="15,16 18,18 21,16 18,14" stroke-width=".1" />
      <polygon points="12,19 15,21 18,19 15,17" stroke-width=".1" />
    </svg>
  );
}

export {
  LeftArrow,
  RightArrow,
  UpArrow,
  DownArrow,
  Plus,
  Minus,
  Times,
  Divide,
  Equals,
  Menu,
  Filter,
  Tag,
  Circle,
  Square,
  HorizontalRectangle,
  VerticalRectangle,
  Mail,
  Calendar,
  Keep,
  Drive,
  Instagram,
  Facebook,
  Twitter,
  LinkedIn,
  Codepen,
  GitHub,
  Pocket,
  Simplenote,
  Dropbox
}