import React from 'react';
import './Recipes.css';

function RecipeCard(props) {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card Recipes-recipeCard">
        <div className="card-block">
          <h2 className="card-title">{props.value.name}</h2>
        </div>
      </div>
    </div>
  );
}

function Recipes(props) {
  const searchBarFilter = recipe => recipe.name.toUpperCase().includes(props.searchString);
  const recipeTagFilter = recipe => props.checkedCategories.includes(recipe.category) || props.checkedCategories.length === 0;

  const filteredRecipes = props.recipes.filter(searchBarFilter)
                                       .filter(recipeTagFilter);

  return (
    <div className="row Recipes">
      {filteredRecipes.map((recipe, i) => 
        <RecipeCard key={i} value={recipe} />
      )}
    </div>
  );
}

export default Recipes;
