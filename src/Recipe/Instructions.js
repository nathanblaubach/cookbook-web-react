import React from 'react';
import '../site.css';

function Instructions(props) {
  return (
    <div className="Recipe-card">
      <h3>Instructions:</h3>
      <p>Preheat oven to 350 degrees Fahrenheit or 180 degrees Celsius.</p>
      <p>Mix oil and sugar until well blended.</p>
      <p>Add eggs and vanilla; stir just until blended.</p>
      <p>Mix all dry ingredients in a separate bowl.</p>
      <p>Stir dry ingredients into the oil/sugar mixture.</p>
      <p>Pour into greased 9 x 9 square pan.</p>
      <p>Bake for 20 minutes or until sides just starts to pull away from the pan.</p>
      <p>Cool completely before cutting.</p>
    </div>
  );
}

export default Instructions;