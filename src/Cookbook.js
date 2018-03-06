import React from 'react';
import Categories from './Categories.js';
import Recipes from './Recipes.js';
import Recipe from './Recipe/Recipe.js';
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
      selectedRecipe: 0,
      showRecipe: false,
    }
  }

  handleRecipeClick(recipeId) {
    this.setState({
      selectedRecipe: recipeId,
      showRecipe: recipeId !== undefined,
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
      <div className="Cookbook-layout">
        <div className="header title">
          <h2>The McClain Family Cookbook</h2>
          <input id="searchText" type="textbox" placeholder="Search" onKeyUp={() => this.handleSearchBarChange()} />  
        </div>
        <div className="sidebar">
          <Categories 
            categories={this.state.categories}
            visible={window.innerWidth > 1024}
            onChange={(i) => this.handleTagSelectionChange(i)}
          />
        </div>
        <div className="content">
          <Recipe 
            recipe={this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe)[0]}
            showRecipe={this.state.showRecipe}
            onClick={(recipeId) => this.handleRecipeClick(recipeId)}
          />
          <Recipes
            recipes={this.state.recipes}
            searchString={this.state.searchString}
            checkedCategories={this.state.checkedCategories}
            onClick={(recipeId) => this.handleRecipeClick(recipeId)}
          />
        </div>
      </div>
    );
  }
}

export default Cookbook;
