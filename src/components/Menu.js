import React    from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
  return !props.visible ? React.createElement('span') : React.createElement('div', { className: "sidebar" },
    React.createElement('img', { onClick: props.backClick, src: require("../images/filter.svg"), alt:"filter" }),
    React.createElement('div', { className: "sidebar-content" }, 
      React.createElement('h3', {}, 'Recipes For'),
      props.categories.map(category =>
        React.createElement('div', { key: category.key, style: { marginBottom: '.5rem' }},
          React.createElement('input', {
            type: 'checkbox',
            id: category.key,
            checked: props.checkedCategories.includes(category.key),
            onChange: () => props.onChange(category.key)
          }),
          React.createElement('label', { htmlFor: category.key }, category.name) 
        )
      ),
      React.createElement('hr'),
      React.createElement(Link, {to: '/about'}, 'About')
    )
  );
}

export {
  Menu
};

