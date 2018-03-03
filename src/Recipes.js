import React from 'react';
import './Recipes.css';

function RecipeCard(props) {
  return (
    <div className="Recipes-card" onClick={props.onClick}>
      {props.value.name}
    </div>
  );
}

function Recipes(props) {
  const searchBarFilter = recipe => recipe.name.toUpperCase().includes(props.searchString);
  const recipeTagFilter = recipe => props.checkedCategories.includes(recipe.category) || props.checkedCategories.length === 0;

  const filteredRecipes = props.recipes.filter(searchBarFilter)
                                       .filter(recipeTagFilter);

  return (
    <div className="Recipes-layout">
      {filteredRecipes.map((recipe, i) => 
        <RecipeCard key={i} value={recipe} onClick={props.onClick} />
      )}
    </div>
  );
}

export default Recipes;
