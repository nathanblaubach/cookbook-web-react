import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'react-feather';
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
          <input id="searchText" className="searchBar" type="textbox" placeholder="Search" onInput={() => this.handleSearchBarChange()} />  
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
        <div className="footer title">
          <p>This cookbook is a digitized version of the cookbook that was created in 2006 of McClain Family Recipes.</p>
          <p>The goal is to make it easier to access as well as add new recipes as time goes on.</p>
          <p>If you have one to add, you can either send it to me or wait until I am able to get the add feature up and running</p>
          <Instagram />&nbsp;<a href="https://www.instagram.com/nathanblaubach/">Instagram</a><br /><br />
          <Facebook />&nbsp;<a href="https://www.facebook.com/nathan.blaubach">Facebook</a><br /><br />
          <Twitter />&nbsp;<a href="https://twitter.com/BlaubachNathan">Twitter</a><br /><br />
          <Mail />&nbsp;<a href="mailto:nathanblaubach@gmail.com">Email</a>
        </div>
      </div>
    );
  }
}

export default Cookbook;
