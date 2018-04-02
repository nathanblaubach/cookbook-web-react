import React from 'react';
import './Recipe.css';

function Ingredients(props) {
  return (
    <div className="card">
      <h3>Ingredients:</h3>
      {props.ingredients.map((ingredient, i) => <p key={i}>{ingredient}</p>)}
    </div>
  );
}

function Instructions(props) {
  return (
    <div className="card">
      <h3>Instructions:</h3>
      {props.instructions.map((instruction, i) => <p key={i}>{(i+1) + ". " + instruction}</p>)}
    </div>
  );
}

function RecipeView(props) {
  const dataService = require('../data/FileIO.js');
  const recipe = dataService.getRecipe(parseInt(props.match.params.number, 10));
  return (
    <div className="recipe-grid">
      <h1>{recipe.name}</h1>
      <Ingredients ingredients={recipe.ingredients} />
      <Instructions instructions={recipe.instructions} />
    </div>
  );
}

export default RecipeView;