import React from 'react';
import Notecard from '../Resources/Notecard';
import { LeftArrow } from '../Resources/Icons';
import { Link } from 'react-router-dom';

function RecipeView(props) {
  const dataService = require('../data/FileIO');
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
    <main className="recipe">
      <header>
        <Link to={"/"}><LeftArrow /></Link>
        <img src={require("../Resources/logo/logo-white-small.png")} alt="logo"/>
        <span></span>
      </header>
      <Notecard title={recipe.name} rows={rows} />
    </main>
  );
}

export default RecipeView;