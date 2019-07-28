import React    from 'react';
import { Link } from 'react-router-dom';

function AddButton(props) {
  return React.createElement(Link, {to: '/recipeAdd'},
    React.createElement('img', {
      className: 'add-button',
      src: require("../images/plus.svg"),
      alt:"Add Recipe"
    })
  );
}

export {
  AddButton
};
