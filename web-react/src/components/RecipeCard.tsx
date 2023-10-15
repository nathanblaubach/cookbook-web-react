import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeCardDetails } from '../models/recipe';
import './RecipeCard.css';

// `recipe-card-${recipe.id}`
//`recipe-card-${recipe.id}-ingredient-${i}`

export default function RecipeCard({ recipe = new RecipeCardDetails(-1, '', new Array<string>()) }): React.JSX.Element {

  const ingredients = recipe.relevantIngredients.map((ingredient, i) => <h5 key={i}>{ingredient}</h5>);

  return (
    <Link className='recipe-card-link' key={recipe.id} to={`/recipes/${recipe.id}`}>
      <div className='card'>
        <h3>{recipe.name}</h3>
        { ingredients }
      </div>
    </Link>
  );
  
}
