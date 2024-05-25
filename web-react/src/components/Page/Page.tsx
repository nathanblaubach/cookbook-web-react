import React  from 'react';
import { Link } from 'react-router-dom';
import cookbookLogo from '../../assets/logo.svg';
import './Page.css';

type PageProps = {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps): React.JSX.Element => (
  <React.Fragment>
    <header>
      <img src={cookbookLogo} className="cookbook-logo" alt="McClain Family Cookbook Logo" />
      <nav>
        {
          [
            { to: '/recipes', label: 'Search' },
            { to: '/about', label: 'About' }
          ].map((link, i) => <Link key={i} to={link.to} className='link'>{link.label}</Link>)
        }
      </nav>
    </header>
    <main>{ children }</main>
  </React.Fragment>
);
