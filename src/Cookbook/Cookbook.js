import React from 'react';
import Categories from './Categories.js';
import Search from './Search.js';
import Recipes from './Recipes.js';
import './Cookbook.css';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    const dataService = require('../data/FileIO.js');
    const cookbookData = dataService.data();
    this.state = {
      categories: cookbookData.categories,
      recipes: cookbookData.recipes,
      checkedCategories: [],
      searchString: "",
      showCategories: false,
    }
  }

  showCategories() {
    this.setState({
      showCategories: true,
    });
  }

  hideCategories() {
    this.setState({
      showCategories: false,
    });
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
      <div>
        <Search 
          onClick={() => this.showCategories()}
          onInput={() => this.handleSearchBarChange()}
        />
        <Recipes
          recipes={this.state.recipes}
          searchString={this.state.searchString}
          checkedCategories={this.state.checkedCategories}
          onClick={(recipeId) => this.handleRecipeClick(recipeId)}
        />
        <Categories
          categories={this.state.categories}
          checkedCategories={this.state.checkedCategories}
          visible={this.state.showCategories}
          backClick={() => this.hideCategories()}
          onChange={(i) => this.handleTagSelectionChange(i)}
        />
      </div>
    );
  }
}

export default Cookbook;