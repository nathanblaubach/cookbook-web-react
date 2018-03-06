import React from 'react';
import '../site.css';

function Instructions(props) {
  return (
    <div className="card">
      <h3>Instructions:</h3>
      {props.instructions.map(instruction => <p>{instruction}</p>)}
    </div>
  );
}

export default Instructions;