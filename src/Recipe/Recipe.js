import React from 'react';
import Information from './Information.js';
import Ingredients from './Ingredients.js';
import Instructions from './Instructions.js';

import '../site.css';
import './Recipe.css';

function Recipe(props) {
  return (
    <div id="modal">
      <div className="Recipe-layout">
        <div className="Recipe-header">
          <div className="header-footer">
            <p onClick={() => recipeModalToggle()}>Back</p>
          </div>
        </div>
        <div className="Recipe-information">
          <Information />
        </div>
        <div className="Recipe-ingredients">
          <Ingredients />
        </div>
        <div className="Recipe-instructions">
          <Instructions />
        </div>
      </div>
    </div>
  );
}

var hidden = true;
function recipeModalToggle() {
  hidden = !hidden;
  document.getElementById("modal").style.display = hidden ? 'none' : 'block';
}

export { Recipe, recipeModalToggle };