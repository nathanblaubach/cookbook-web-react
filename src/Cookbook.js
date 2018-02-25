import React from 'react';
import Filters from './Filters.js';
import RecipeList from './RecipeList.js';
import './Cookbook.css';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        "Beverage",
        "Hors d'oeuvre",
        "Main Entree",
        "Salad",
        "Side Dish",
        "Soup",
        "Bread",
        "Breakfast",
        "Dessert",
        "Miscellaneous",
        "McClain Family Directory",
      ],
      recipes: [
        "Brownies",
        "Turkey Casserole",
        "Spaghetti",
        "Parmesian Chicken",
        "Korean Beef",
        "Muffins",
        "White Chicken Chili",
        "Zucchini Bread",
        "Chicken Poppyseed Casserole"
      ],
      searchString: "",
    }
  }

  handleSearchBarChange() {
    this.setState({
      searchString: document.getElementById('searchText').value.toUpperCase(),
    });
  }

  handleFilterSelectionChange() {

  }

  render() {
    return (
      <div className="Cookbook">
        <header className="Cookbook-header">
          <h1 className="Cookbook-title">Cookbook</h1>
          <input type="text" className="form-control" id="searchText" onKeyUp={() => this.handleSearchBarChange()} />
        </header>
        <div className="row">
          <div className="col-lg-3">
            <Filters 
              filters={this.state.filters}
              onChange={() => this.handleFilterSelectionChange()}
            />
          </div>
          <div className="col-lg-9">
            <RecipeList
              recipes={this.state.recipes}
              searchString={this.state.searchString}
              filters={this.state.filters}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cookbook;
