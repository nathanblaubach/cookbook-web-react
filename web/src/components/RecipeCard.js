import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const styles = {
    link: {
      textDecoration: 'none'
    },
    card: {
      boxShadow: 'black 0 0 3px',
      borderRadius: '.5rem',
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      padding: '1rem'
    }
  };

  return (
    <Link style={styles.link} key={props.recipe.id} to={`/recipes/${props.recipe.id}`}>
      <div style={styles.card}>
      <h3>{props.recipe.name}</h3>
        {
          props.recipe.relevantIngredients.map((ingredient, i) =>
            <h5 key={i}>{ingredient}</h5>
          )
        }
      </div>
    </Link>
  );

}

export default RecipeCard;