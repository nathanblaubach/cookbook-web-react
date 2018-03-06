import React from 'react';
import Ingredients from './Ingredients.js';
import Instructions from './Instructions.js';
import '../site.css';

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