import React  from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../images/logo.svg';

const Page = (props) => {

  const links = [
    { to: '/recipes', label: 'Search' },
    { to: '/about', label: 'About' }
  ]

  const styles = {
    header: {
      height: '4rem',
      padding: '.75rem',
      display: 'flex',
      justifyContent: 'space-between'
    },
    main: {
      maxWidth: '768px',
      margin: '0 auto',
      padding: '.75rem'
    },
    logo: {
      color: 'white',
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
  }

  return (
    <>
      <header style={styles.header}>
        <img style={styles.logo} src={AppLogo} alt="logo" />
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
      <main style={styles.main}>
        { props.children }
      </main>
    </>
  );
};

export default Page;
