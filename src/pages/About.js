import React  from 'react';
import Header from '../components/Header';

function About(props) {
  const links = [
    {
      text: 'See Source Code on GitHub',
      url: 'https://github.com/nathanblaubach/cookbook'
    },
    {
      text: 'License on GitHub (MIT)',
      url: 'https://github.com/nathanblaubach/cookbook/blob/master/LICENSE'
    },
    {
      text: 'My Website',
      url: 'https://nathanblaubach.com'
    },
    {
      text: 'RealFaviconGenerator',
      url: 'https://realfavicongenerator.net/'
    }
  ];

  return React.createElement('div', {},
      React.createElement(Header, { currentPath: props.location.pathname }),
      React.createElement('main', {},
        React.createElement('h1', {}, 'The McClain Family Cookbook'),
        React.createElement('h2', {}, 'About'),
        React.createElement('p', {}, 'This cookbook is a digitized version of the McClain Family Recipes book that was created in 2006. The hope is that this will make the cookbook more accessible and allow us to easily add new recipes as time goes on.'),
        React.createElement('p', {},
          'If you have any questions about how the cookbook works or ideas for how the cookbook can be improved, send me an email at ',
          React.createElement('a', { href: 'mailto:nathanblaubach@gmail.com' }, 'nathanblaubach@gmail.com')
        ),
        React.createElement('h2', {}, 'Development'),
        React.createElement('ul', {},
          links.map(link =>
            React.createElement('li', { key: link.url },
              React.createElement('a', { href: link.url }, link.text),
            )
          )
        )
      )
  );
}

export default About;
