import React    from 'react';
import { Link } from 'react-router-dom';

function CardGrid(props) {
  return React.createElement('div', { className: 'grid' },
    props.recipeDetails.map(recipe =>
      React.createElement(Link, { key: recipe.id, to:'/recipeView/' + recipe.id, className: 'card' },
        React.createElement('h3', {}, recipe.name),
        recipe.relevantIngredients.map((ingredient, i) =>
          React.createElement('h5', { key: i }, ingredient)
        )
      )
    )
  );
}

export {
  CardGrid
};
