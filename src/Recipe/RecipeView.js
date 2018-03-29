import React from 'react';

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
    <div>
      <h1 align="center">{recipe.name}</h1>
      <div><Ingredients ingredients={recipe.ingredients} /></div>
      <div><Instructions instructions={recipe.instructions} /></div>
    </div>
  );
}

export default RecipeView;