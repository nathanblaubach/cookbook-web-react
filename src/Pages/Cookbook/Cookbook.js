import React      from 'react';
import Categories from './Categories.js';
import { Filter } from '../../Resources/Icons.js';
import { Link } from 'react-router-dom';

import './Cookbook.css';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    const dataService = require('../../data/FileIO.js');
    const cookbookData = dataService.data();
    this.state = {
      categories: cookbookData.categories,
      recipes: cookbookData.recipes,
      checkedCategories: [],
      searchString: "",
      showCategories: false,
    }
    this.updateSearchString = this.updateSearchString.bind(this);
  }

  toggleCategoryVisibility() {
    const shouldShow = !this.state.showCategories;
    this.setState({ showCategories: shouldShow });
  }

  updateSearchString(event) {
    this.setState({ searchString: event.target.value });
  }

  handleCategorySelectionChange(i) {
    const updatedCategories = this.state.checkedCategories.includes(i)
      ? this.state.checkedCategories.filter(cat => cat !== i)
      : this.state.checkedCategories.concat(i);
    this.setState({
      checkedCategories: updatedCategories,
    });
  }

  getFilteredResults() {
    const searchBarFilter = recipe => recipe.name.toUpperCase().includes(this.state.searchString.toUpperCase());
    const recipeTagFilter = recipe => this.state.checkedCategories.includes(recipe.category) || 
                                      this.state.checkedCategories.length === 0;
    return this.state.recipes.filter(searchBarFilter)
                             .filter(recipeTagFilter);
  }

  render() {
    return (
      <div>
        <div className="searchArea">
          <span onClick={() => this.toggleCategoryVisibility()}>
            <Filter className="icon" />
          </span>
          <input type="textbox" placeholder="Search" value={this.state.searchString} onChange={this.updateSearchString} />
        </div>
        <div className="cookbook-grid">
          {
            this.getFilteredResults().map(recipe => 
              <Link key={recipe.id} className='card card-clickable' to={'/recipeView/' + recipe.id}>
                <h2 align='center'>{recipe.name}</h2>
              </Link>
            )
          }
        </div>
        <Categories
          categories={this.state.categories}
          checkedCategories={this.state.checkedCategories}
          visible={this.state.showCategories}
          backClick={() => this.toggleCategoryVisibility()}
          onChange={(i) => this.handleCategorySelectionChange(i)}
        />
      </div>
    );
  }
}

export default Cookbook;
