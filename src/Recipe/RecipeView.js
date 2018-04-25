import React from 'react';
import './Recipe.css';

function NotecardHeader(props) {
  return (
    <div className="notecard-title">
      <h1>{props.titleText}</h1>
    </div>
  );
}

function NotecardSection(props) {
  return (
    <div>
      <div className="notecard-subtitle"><p>{props.sectionName}</p></div>
      {props.sectionItems.map((item, i) => <div className="notecard-row" key={i}><p>{item}</p></div>)}
      <div className="notecard-row"><p>&nbsp;</p></div>
    </div>
  );
}

function RecipeView(props) {
  const dataService = require('../data/FileIO.js');
  const recipe = dataService.getRecipe(parseInt(props.match.params.number, 10));
  return (
    <div className="notecard">
      <NotecardHeader  titleText={recipe.name} />
      <NotecardSection sectionName="Ingredients:"  sectionItems={recipe.ingredients}  />
      <NotecardSection sectionName="Instructions:" sectionItems={recipe.instructions} />
    </div>
  );
}

export default RecipeView;