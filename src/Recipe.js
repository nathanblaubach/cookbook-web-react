import React from 'react';

function Ingredients(props) {
  return (
    <div className="card">
      <h3>Ingredients:</h3>
      {props.ingredients.map(ingredient => <p>{ingredient}</p>)}
    </div>
  );
}

function Instructions(props) {
  return (
    <div className="card">
      <h3>Instructions:</h3>
      {props.instructions.map(instruction => <p>{instruction}</p>)}
    </div>
  );
}

function Recipe(props) {
  if (!props.showRecipe) {
    return(<div></div>);
  } else {
    return (
      <div className="popup">
        <div className="title">
          <h4 id="exit-button" onClick={() => props.onClick(undefined)}>Back</h4>
          <h2>{props.recipe.name}</h2>
        </div>
        <div className="recipe-panel">
          <div><Ingredients ingredients={props.recipe.ingredients} /></div>
          <div><Instructions instructions={props.recipe.instructions} /></div>
        </div>
      </div>
    );
  }
  
}

export default Recipe;