import React from 'react';

function RecipeCard(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <h2>{props.value.name}</h2>
    </div>
  );
}

function Recipes(props) {
  const searchBarFilter = recipe => recipe.name.toUpperCase().includes(props.searchString);
  const recipeTagFilter = recipe => props.checkedCategories.includes(recipe.category) || 
                                    props.checkedCategories.length === 0;
  return (
    <div className="content-grid">
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
