import React from 'react';

function Instructions(props) {
  return (
    <div className="card">
      <h3>Instructions:</h3>
      {props.instructions.map((instruction, i) => <p key={i}>{(i+1) + ". " + instruction}</p>)}
    </div>
  );
}

export default Instructions;