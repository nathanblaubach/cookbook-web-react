import React from 'react';

function Ingredients(props) {
  return (
    <div className="card">
      <h3>Ingredients:</h3>
      {props.ingredients.map((ingredient, i) => <p key={i}>{ingredient}</p>)}
    </div>
  );
}

export default Ingredients;