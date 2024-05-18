import React from 'react';
import { Page } from '../components/Page';

type Link = {
  text: string;
  url: string;
}

export const About = (): React.JSX.Element => {

  const links: Link[] = [
    { text: 'Source Code on GitHub (MIT)', url: 'https://github.com/nathanblaubach/cookbook' },
    { text: 'My Website', url: 'https://nathanblaubach.com' },
    { text: 'RealFaviconGenerator', url: 'https://realfavicongenerator.net/' }
  ];

  return (
    <Page>
      <h1>The McClain Family Cookbook</h1>
      <h2>About</h2>
      <p>
        This cookbook is a digitized version of the McClain Family Recipes book that was created in 2006. 
        The hope is that this will make the cookbook more accessible and allow us to easily add new recipes as time goes on.
      </p>
      <p>
        If you have any questions about how the cookbook works or ideas for how the cookbook can be improved, 
        send me an email at <a href="mailto:nathanblaubach@gmail.com">nathanblaubach@gmail.com</a>
      </p>
      <h2>Development</h2>
      <ul>
        { links.map(link => <li key={link.url}><a href={link.url}>{link.text}</a></li>) }
      </ul>
    </Page>
  );
};
