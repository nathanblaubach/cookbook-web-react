import React      from 'react';
import { Link }   from 'react-router-dom';
import { Menu }   from '../Resources/Icons';
import Categories from '../Resources/Categories';
import Card       from '../Resources/Card';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    const dataService = require('../data/FileIO');
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

        <header>
          <a onClick={() => this.toggleCategoryVisibility()} ><Menu /></a>
          <input type="textbox" placeholder="Search" value={this.state.searchString} onChange={this.updateSearchString} />
          <img src={require("../Resources/logo/logo-white-small.png")} alt="logo"/>
        </header>

        <main className="grid">
          {
            this.getFilteredResults().map(recipe => 
              <Link key={recipe.id} to={'/recipeView/' + recipe.id}>
                <Card title={recipe.name} />
              </Link>
            )
          }
        </main>
        
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
