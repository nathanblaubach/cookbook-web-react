import React from 'react';
import '../site.css';

function Ingredients(props) {
  return (
    <div className="card">
      <h3>Ingredients:</h3>
      {props.ingredients.map(ingredient => <p>{ingredient}</p>)}
    </div>
  );
}

export default Ingredients;