import React from 'react';
import * as Icon from 'react-feather';

function Ingredients(props) {
  return (
    <div className="card">
      <h3>Ingredients:</h3>
      {props.ingredients.map((ingredient, i) => <p key={i}>{(i+1) + ". " + ingredient}</p>)}
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

function Recipe(props) {
  if (!props.showRecipe) {
    return(<div></div>);
  } else {
    return (
      <div className="popup">
        <div className="title">
          <h3 id="exit-button" onClick={() => props.onClick(undefined)}><Icon.ArrowLeft /> Back</h3>
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