import React from 'react';
import { Menu, Filter, Mail } from 'react-feather';
import Navigation from './Navigation.js';
import Categories from './Categories.js';
import Recipes from './Recipes.js';
import Recipe from './Recipe.js';
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
      showMenu: false,
      showCategories: false,
      showRecipe: false,
    }
  }

  handleMenuClick() {
    this.setState({
      showMenu: true,
    });
  }

  handleCategoriesClick() {
    this.setState({
      showCategories: true,
    });
  }

  handleBackClick() {
    this.setState({
      showMenu: false,
      showCategories: false,
    });
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
      <div>
        <div className="header">
          <div className="header-content">
            <div className="header-grid">
              <Menu className="icon" onClick={() => this.handleMenuClick()} />
              <Filter className="icon" onClick={() => this.handleCategoriesClick()} />
              <input id="searchText" className="searchBar" type="textbox" placeholder="Search" onInput={() => this.handleSearchBarChange()} />
            </div>
          </div>
        </div>
        <Navigation
          visible={this.state.showMenu}
          backClick={() => this.handleBackClick()} 
        />
        <Categories
          categories={this.state.categories}
          checkedCategories={this.state.checkedCategories}
          visible={this.state.showCategories}
          backClick={() => this.handleBackClick()}
          onChange={(i) => this.handleTagSelectionChange(i)}
        />

        <div className="content">
          <Recipe 
            recipe={this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe)[0]}
            visible={this.state.showRecipe}
            backClick={() => this.handleBackClick()}
            onClick={(recipeId) => this.handleRecipeClick(recipeId)}
          />
          <Recipes
            recipes={this.state.recipes}
            searchString={this.state.searchString}
            checkedCategories={this.state.checkedCategories}
            onClick={(recipeId) => this.handleRecipeClick(recipeId)}
          />
        </div>
        <div className="footer">
          <p>This cookbook is a digitized version of the cookbook that was created in 2006 of McClain Family Recipes.</p>
          <p>The goal is to make it easier to access as well as add new recipes as time goes on.</p>
          <p>If you have one to add, you can either send it to me or wait until I am able to get the add feature up and running</p>
          <a href="mailto:nathanblaubach@gmail.com"><Mail /></a>
        </div>
      </div>
    );
  }
}

export default Cookbook;
