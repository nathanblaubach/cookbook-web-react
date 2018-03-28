import React from 'react';
import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import './Recipe.css';

function Recipe(props) {
  const dataService = require('../data/FileIO.js');
  const recipe = dataService.getRecipe(parseInt(props.match.params.number, 10));
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <Link to="../home"><ArrowLeft className="icon"/></Link>
        </div>
      </div>
      <div className="content">
        <h1 align="center">{recipe.name}</h1>
        <div><Ingredients ingredients={recipe.ingredients} /></div>
        <div><Instructions instructions={recipe.instructions} /></div>
      </div>
    </div>
  );
}

export default Recipe;