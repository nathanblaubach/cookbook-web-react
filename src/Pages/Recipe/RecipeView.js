import React from 'react';
import Notecard from './Notecard';
import './Recipe.css';
import { LeftArrow } from '../../Resources/Icons.js';
import { Link } from 'react-router-dom';

function RecipeView(props) {
  const dataService = require('../../data/FileIO.js');
  const recipe = dataService.getRecipe(parseInt(props.match.params.number, 10));
  const rows = [
    'Ingredients:',
    ...recipe.ingredients,
    '',
    'Instructions:',
    ...recipe.instructions,
    ''
  ];

  return (
    <div className="recipe">
      <Link to='/'><LeftArrow /></Link>
      <Notecard title={recipe.name} rows={rows} />
    </div>
  );
}

export default RecipeView;