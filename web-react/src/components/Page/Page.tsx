import React  from 'react';
import { Link } from 'react-router-dom';
import { LinkData } from '../../types';
import cookbookLogo from '../../assets/logo.svg';
import './Page.css';

type PageProps = {
  children: React.ReactNode;
};

export function Page({ children }: PageProps): React.JSX.Element {
  const links: LinkData[] = [
    { text: 'Search', url: '/recipes' },
    { text: 'About', url: '/about' },
  ];

  return (
    <React.Fragment>
      <header>
        <img src={cookbookLogo} className="cookbook-logo" alt="McClain Family Cookbook Logo" />
        <nav>
          {
            links.map((link, i) => <Link key={i} to={link.url} className='link'>{link.text}</Link>)
          }
        </nav>
      </header>
      <main>{ children }</main>
    </React.Fragment>
  );
}
