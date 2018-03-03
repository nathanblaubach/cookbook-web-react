import React from 'react';
import Categories from './Categories.js';
import Recipes from './Recipes.js';
import { Recipe, recipeModalToggle } from './Recipe/Recipe.js';
import './Cookbook.css';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    const dataService = require('./data/FileIO.js');
    const cookbookData = dataService.data();
    this.state = {
      categories: cookbookData.categories,
      recipes: cookbookData.recipes,
      checkedCategories: [],
      searchString: "",
    }
  }

  handleSearchBarChange() {
    this.setState({
      searchString: document.getElementById('searchText').value.toUpperCase(),
    });
  }

  handleTagSelectionChange(i) {
    const updatedCategories = this.state.checkedCategories.includes(i)
      ? this.state.checkedCategories.filter(cat => cat !== i)
      : this.state.checkedCategories.concat(i);
    this.setState({
      checkedCategories: updatedCategories,
    });
  }

  render() {
    return (
      <div className="Cookbook-layout">
        <div className="header">
          <p>The McClain Family Cookbook</p>
          <input id="searchText" type="textbox" placeholder="Search" onKeyUp={() => this.handleSearchBarChange()} />  
        </div>
        <div className="sidebar">
          <Categories 
            categories={this.state.categories}
            onChange={(i) => this.handleTagSelectionChange(i)}
          />
        </div>
        <div className="content">
          <Recipe />
          <Recipes
            recipes={this.state.recipes}
            searchString={this.state.searchString}
            checkedCategories={this.state.checkedCategories}
            onClick={() => recipeModalToggle()}
          />
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default Cookbook;
