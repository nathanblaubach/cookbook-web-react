import React from 'react';
import { ArrowLeft } from 'react-feather';

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

function Recipe(props) {
  if (!props.visible) {
    return(<div></div>);
  } else {
    return (
      <div className="popup">
        <div className="header">
          <div className="header-content">
            <ArrowLeft className="icon" onClick={() => props.onClick(undefined)}/>
          </div>
        </div>
        <div className="content">
          <h1 align="center">{props.recipe.name}</h1>
          <div><Ingredients ingredients={props.recipe.ingredients} /></div>
          <div><Instructions instructions={props.recipe.instructions} /></div>
        </div>
      </div>
    );
  }
  
}

export default Recipe;