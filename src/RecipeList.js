import React from 'react';
import './RecipeList.css';

function RecipeCard(props) {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card RecipeList-recipeCard">
        <div className="card-block">
          <h2 className="card-title">{props.value}</h2>
        </div>
      </div>
    </div>
  );
}

function RecipeList(props) {
  const searchBarFilter = recipe => recipe.toUpperCase().includes(props.searchString);

  const filteredRecipes = props.recipes.filter(searchBarFilter);
  return (
    <div className="row RecipeList">
      {filteredRecipes.map((recipe, i) => 
        <RecipeCard key={i} value={recipe} />
      )}
    </div>
  );
}

export default RecipeList;
