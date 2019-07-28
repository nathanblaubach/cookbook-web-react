import React          from 'react';
import { BackHeader } from '../components/Headers';

function About(props) {
  return React.createElement('main', {},
      React.createElement(BackHeader),
      React.createElement('h1', {}, 'The McClain Family Cookbook'),
      React.createElement('p', {}, 'This cookbook is a digitized version of the McClain Family Recipes book that was created in 2006. The hope is that this will make the cookbook more accessible and allow us to easily add new recipes as time goes on.'),
      React.createElement('p', {},
        'If you have any questions about how the cookbook works or ideas for how the cookbook can be improved, send me an email at ',
        React.createElement('a', { href: 'mailto:nathanblaubach@gmail.com' }, 'nathanblaubach@gmail.com')
      ),
      React.createElement('p', {},
        'All source code was written by ',
        React.createElement('a', { href: 'https://nathanblaubach.com' }, 'Nathan Blaubach'),
        ' and is available ',
        React.createElement('a', { href: 'https://github.com/nathanblaubach/cookbook' }, 'on GitHub'),
        ' under the ',
        React.createElement('a', { href: 'https://github.com/nathanblaubach/cookbook/blob/master/LICENSE' }, 'MIT License')
      ),
      React.createElement('p', {},
        'The logo was created by Jeremy Slagle, and the favicon was created using ',
        React.createElement('a', { href: 'https://realfavicongenerator.net/' }, 'RealFaviconGenerator')
      )
  );
}

export default About;
