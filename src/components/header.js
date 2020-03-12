import React    from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/recipes', label: 'Search' },
  { to: '/about', label: 'About' }
];

const Header = () => (
  <header>
    <img src={require("../images/logo.svg")} alt="logo" />
    <nav>
      { links.map((link, i) => <Link key={i} to={link.to}>{link.label}</Link>) }
    </nav>
  </header>
);

export default Header;
