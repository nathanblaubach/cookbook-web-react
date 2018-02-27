import React from 'react';
import Categories from './Categories.js';
import Recipes from './Recipes.js';
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
      <div className="Cookbook">
        <header className="Cookbook-header">
          <h1 className="Cookbook-title">Cookbook</h1>
          <input type="text" className="form-control" id="searchText" onKeyUp={() => this.handleSearchBarChange()} />
        </header>
        <div className="row">
          <div className="col-lg-3">
            <Categories 
              categories={this.state.categories}
              onChange={(i) => this.handleTagSelectionChange(i)}
            />
          </div>
          <div className="col-lg-9">
            <Recipes
              recipes={this.state.recipes}
              searchString={this.state.searchString}
              checkedCategories={this.state.checkedCategories}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cookbook;
