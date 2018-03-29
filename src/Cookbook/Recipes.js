import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard(props) {
  const link = "./" + props.value.id;
  return (
      <Link className="card" to={link}>
        <h2>
          {props.value.name}
        </h2>
      </Link>
  );
}

function Recipes(props) {
  const searchBarFilter = recipe => recipe.name.toUpperCase().includes(props.searchString);
  const recipeTagFilter = recipe => props.checkedCategories.includes(recipe.category) || 
                                    props.checkedCategories.length === 0;
  return (
    <div className="cookbook-grid">
      {props.recipes.filter(searchBarFilter)
                    .filter(recipeTagFilter)
                    .map(recipe => 
                      <RecipeCard
                        key={recipe.id}
                        value={recipe}
                        onClick={(id) => props.onClick(recipe.id)}
                      />
                    )
      }
    </div>
  );
}

export default Recipes;
