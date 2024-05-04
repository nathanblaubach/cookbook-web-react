import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

type RecipeCardProps = {
  id: number;
  name: string;
  relevantIngredients: Array<string>;
};

export const RecipeCard = ({ id, name, relevantIngredients }: RecipeCardProps): React.JSX.Element => (
  <Link className='recipe-card-link' key={id} to={`/recipes/${id}`}>
    <div className='card'>
      <h3>{name}</h3>
      { relevantIngredients.map((ingredient, i) => <h5 key={i}>{ingredient}</h5>) }
    </div>
  </Link>
);
