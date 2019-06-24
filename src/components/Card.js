import React from 'react';

function Card(props) {
  return React.createElement('div', { className: 'card' },
    React.createElement('h3', {}, props.title),
    props.relevantIngredients.map((ingredient, i) =>
      React.createElement('h5', { key: i }, ingredient)
    )
  );
}

export default Card;
