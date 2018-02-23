import React from 'react';
import Filters from './Filters.js';
import RecipeList from './RecipeList.js';
import './Cookbook.css';

class Cookbook extends React.Component {
  render() {
    const recipes = [
      "Brownies",
      "Turkey Casserole",
      "Spaghetti",
      "Parmesian Chicken",
      "Korean Beef",
      "Muffins",
      "White Chicken Chili",
      "Zucchini Bread",
      "Chicken Poppyseed Casserole"
    ];
  
    return (
      <div className="Cookbook">
        <header className="Cookbook-header">
          <h1 className="Cookbook-title">Cookbook</h1>
        </header>
        <p className="Cookbook-intro">
          The zillionth cookbook app to be made, because why not?
        </p>
        <div className="row">
          <div className="col-lg-2">
            <Filters />
          </div>
          <div className="col-lg-10">
            <RecipeList value={recipes} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cookbook;
