import React    from 'react';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    height: '4rem',
    padding: '.75rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    width: '4rem'
  },
  nav: {
    margin: '1.5rem 0'
  },
  links: {
    marginLeft: '1rem',
    color: '#00304E',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

const links = [
  { to: '/recipes', label: 'Search' },
  { to: '/about', label: 'About' }
];

const Header = () => (
  <header style={styles.header}>
    <img style={styles.logo} src={require("../images/logo.svg")} alt="logo" />
    <nav style={styles.nav}>
      { 
        links.map((link, i) => 
          <Link key={i} to={link.to} style={styles.links}>
            {link.label}
          </Link>
        )
      }
    </nav>
  </header>
);

export default Header;
